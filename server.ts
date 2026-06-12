import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Set up server side JSON limit to handle base64 images
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// Lazy initializer for Gemini Client
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured in Secrets. Please click Settings > Secrets to provide it.");
    }
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// In-memory study upload history for comparison to catch duplicates
interface UploadHistory {
  timestamp: string;
  length: number;
  prefix: string;
  description: string;
}
const uploadedHistory: UploadHistory[] = [];

// API: Health probe
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", time: new Date().toISOString() });
});

// API: Chat Assistant
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array" });
    }

    const ai = getGeminiClient();
    
    // Map existing history into standard structure
    const formattedContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content || "" }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: "You are the Habit Guard AI - a highly supportive, witty, and slightly cheeky personal growth partner that helps users track their habits, limit their screen time, and complete work without cheating. Be realistic, humorous, and deeply encouraging. Help them manage their goals, explain the importance of phone lock scheduled times, and guide them on getting their streak points. Keep responses relatively brief and highly readable."
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    res.status(500).json({ error: error.message || "An error occurred with Gemini API." });
  }
});

// API: Photo Evaluation (Compulsory Habit uploads are checked here)
app.post("/api/gemini/evaluate-photo", async (req, res) => {
  try {
    const { imageBase64, mimeType, habitName, prevDescription } = req.body;
    
    if (!imageBase64) {
      return res.status(400).json({ error: "No image content supplied" });
    }

    // Clean base64 header if present
    let rawBase64 = imageBase64;
    if (imageBase64.includes(";base64,")) {
      rawBase64 = imageBase64.split(";base64,")[1];
    }

    // Quick duplicate detection: check base64 properties
    const currentLength = rawBase64.length;
    const currentPrefix = rawBase64.substring(0, 100);
    
    let isHardDuplicate = false;
    for (const past of uploadedHistory) {
      const lengthDiff = Math.abs(past.length - currentLength);
      // If past string shares the exact prefix and length is extremely close, the file is functionally identical
      if (lengthDiff < 50 && past.prefix === currentPrefix) {
        isHardDuplicate = true;
        break;
      }
    }

    if (isHardDuplicate) {
      return res.json({
        isValid: false,
        isDuplicate: true,
        score: 0,
        description: "Exact duplicate photo detected from previous study session.",
        feedback: "🚨 Hey! This is the exact same photo you uploaded in your previous session. Cheating detected! You can't use simulated screenshots or the exact same picture to bypass the Study lock. Don't betray yourself!"
      });
    }

    const ai = getGeminiClient();

    const imagePart = {
      inlineData: {
        mimeType: mimeType || "image/jpeg",
        data: rawBase64,
      },
    };

    const promptText = `
You are the Habit Guard Visual verification AI. 
The user is supposed to be performing their habit: "${habitName}".
If this is a "Study" block, check if this photo represents genuine study activity (such as notebook notes, textbooks, laptop screens with code/text, sketchbooks, or desks under active use).
If it is a generic background like a blank floor, a ceiling, a black screen, an empty cup, or a pet, it is NOT valid study progress.

Also, evaluate duplicate status:
The previous study photo was described as: "${prevDescription || "None recorded"}"
Compare this new photo to that description. Does it represent the exact same view, same text block, or identical setup indicating cheating?

Please process this photo and respond strictly with a valid JSON object matching the schema:
{
  "isValid": boolean (true if it represents actual progress validation for this habit, false if it's unrelated or cheating),
  "description": string (one clear sentence describing what you see),
  "feedback": string (engaging, strict, humorous, or supportive feedback),
  "score": number (0 to 100 rating their effort/quality of workspace),
  "isDuplicate": boolean (true if it represents the exact same notes page and content with no new work shown, false if it is new/different)
}
Do not return any markdown formatting outside of the JSON object. Just return the raw JSON text.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [imagePart, { text: promptText }],
      config: {
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text || "{}";
    const parsedResult = JSON.parse(resultText);

    // If valid, save descriptors to memory-database to prevent duplicate tomorrow
    if (parsedResult.isValid && !parsedResult.isDuplicate) {
      uploadedHistory.push({
        timestamp: new Date().toISOString(),
        length: currentLength,
        prefix: currentPrefix,
        description: parsedResult.description || ""
      });
    }

    res.json(parsedResult);
  } catch (error: any) {
    console.error("Evaluation Error:", error);
    res.status(500).json({ error: error.message || "An error occurred with image evaluation." });
  }
});

// Vite/Production serving setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
