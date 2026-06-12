/**
 * Generates dynamic base64 images as SVG wrappers for testing photo evaluation and duplicate controls.
 * These are valid SVG images embedded in data URLs that look visually distinct to users and AI.
 */

export interface PresetPhoto {
  id: string;
  name: string;
  description: string;
  category: "study" | "invalid";
  dataUrl: string;
}

// Draw realistic-looking note papers and cards containing math/science/pet SVGs converted to Base64
const createSvgDataUrl = (svgContent: string): string => {
  const cleanSvg = svgContent.trim().replace(/"/g, "'").replace(/\n/g, " ");
  return `data:image/svg+xml;utf8,${encodeURIComponent(cleanSvg)}`;
};

export const PRESET_PHOTOS: PresetPhoto[] = [
  {
    id: "calculus_notes",
    name: "📝 Calculus Notes",
    description: "Handwritten calculus integration and limits derivations.",
    category: "study",
    dataUrl: createSvgDataUrl(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#FDFBF7" stroke="#E2E8F0" stroke-width="4"/>
        <!-- Ruled notebook lines -->
        <line x1="0" y1="40" x2="400" y2="40" stroke="#FEE2E2" stroke-width="1.5" />
        <line x1="50" y1="0" x2="50" y2="300" stroke="#F87171" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="0" y1="70" x2="400" y2="70" stroke="#E2E8F0" stroke-width="1" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="#E2E8F0" stroke-width="1" />
        <line x1="0" y1="130" x2="400" y2="130" stroke="#E2E8F0" stroke-width="1" />
        <line x1="0" y1="160" x2="400" y2="160" stroke="#E2E8F0" stroke-width="1" />
        <line x1="0" y1="190" x2="400" y2="190" stroke="#E2E8F0" stroke-width="1" />
        <line x1="0" y1="220" x2="400" y2="220" stroke="#E2E8F0" stroke-width="1" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#E2E8F0" stroke-width="1" />
        <!-- Headings and Math content -->
        <text x="65" y="32" font-family="'JetBrains Mono', Courier, monospace" font-size="14" fill="#1E293B" font-weight="bold">LECTURE 14: ADVANCED CALCULUS</text>
        <text x="65" y="65" font-family="'JetBrains Mono', Courier, monospace" font-size="11" fill="#2563EB">Task: Find the bounded area below the curve</text>
        <!-- Integrals and derivative formulas -->
        <text x="65" y="93" font-family="'JetBrains Mono', Courier, monospace" font-size="16" fill="#0F172A">∫ (3x² + 2x - 5) dx = x³ + x² - 5x + C</text>
        <text x="65" y="123" font-family="'JetBrains Mono', Courier, monospace" font-size="11" fill="#475569">When bounds are [1, 3]:</text>
        <text x="65" y="153" font-family="'JetBrains Mono', Courier, monospace" font-size="15" fill="#0F172A">F(3) = (27 + 9 - 15) = 21</text>
        <text x="65" y="183" font-family="'JetBrains Mono', Courier, monospace" font-size="15" fill="#0F172A">F(1) = (1 + 1 - 5) = -3</text>
        <text x="65" y="213" font-family="'JetBrains Mono', Courier, monospace" font-size="16" fill="#16A34A" font-weight="bold">Net Area = 21 - (-3) = 24 u²</text>
        <text x="65" y="243" font-family="'JetBrains Mono', Courier, monospace" font-size="11" fill="#DC2626">✓ Verified by Fundamental Theorem of Calculus</text>
        <circle cx="340" cy="150" r="30" fill="none" stroke="#2563EB" stroke-width="2"/>
        <path d="M 310 150 Q 340 120 370 150" fill="none" stroke="#EF4444" stroke-width="2"/>
      </svg>
    `)
  },
  {
    id: "chemistry_notes",
    name: "🧪 Organic Chemistry Notes",
    description: "Chemical structure diagrams and formula reactions.",
    category: "study",
    dataUrl: createSvgDataUrl(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="4"/>
        <line x1="0" y1="40" x2="400" y2="40" stroke="#DCFCE7" stroke-width="2" />
        
        <text x="20" y="30" font-family="'JetBrains Mono', Courier, monospace" font-size="14" fill="#065F46" font-weight="bold">CHEMISTRY: HYDROCARBON REDUCTION</text>
        
        <!-- Hexagon benzene ring -->
        <polygon points="120,80 160,100 160,140 120,160 80,140 80,100" fill="none" stroke="#047857" stroke-width="3"/>
        <circle cx="120" cy="120" r="22" fill="none" stroke="#047857" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="120" y="105" font-family="sans-serif" font-size="10" fill="#065F46" text-anchor="middle">Benzene</text>
        <text x="170" y="125" font-family="'JetBrains Mono', monospace" font-size="13" fill="#1E293B"> +  3 H₂  →</text>
        
        <!-- Fully saturated cyclohexane -->
        <polygon points="270,80 310,100 310,140 270,160 230,140 230,100" fill="none" stroke="#0F766E" stroke-width="3"/>
        <text x="270" y="105" font-family="sans-serif" font-size="10" fill="#0F766E" text-anchor="middle">Cyclohexane</text>
        
        <text x="20" y="210" font-family="'JetBrains Mono', Courier, monospace" font-size="12" fill="#1E293B">Catalyst: Platinum (Pt) at 150°C</text>
        <text x="20" y="235" font-family="'JetBrains Mono', Courier, monospace" font-size="12" fill="#1E293B">Reaction Type: Catalytic Hydrogenation</text>
        <text x="20" y="265" font-family="'JetBrains Mono', Courier, monospace" font-size="11" fill="#047857" font-weight="bold">★ Complete Saturation Achieved (100%)</text>
      </svg>
    `)
  },
  {
    id: "history_essay",
    name: "📚 World History Notes",
    description: "History notes with study timestamps and references.",
    category: "study",
    dataUrl: createSvgDataUrl(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#FCF8F2" stroke="#EAE0D5" stroke-width="4"/>
        <line x1="30" y1="0" x2="30" y2="300" stroke="#D00000" stroke-width="1" />
        
        <text x="45" y="40" font-family="serif" font-size="16" fill="#4A3B32" font-weight="bold">Chapter 8: The Industrial Revolution</text>
        <text x="45" y="70" font-family="serif" font-size="12" fill="#4A3B32">Growth of machinery, factories, and urbanization factors.</text>
        
        <text x="45" y="110" font-family="serif" font-size="11" fill="#755E4E" font-weight="bold">[Key Dates &amp; Events]</text>
        <text x="45" y="130" font-family="serif" font-size="11" fill="#222">- 1769: James Watt patents advanced Steam Engine.</text>
        <text x="45" y="150" font-family="serif" font-size="11" fill="#222">- 1793: Eli Whitney invents the Cotton Gin.</text>
        <text x="45" y="170" font-family="serif" font-size="11" fill="#222">- 1804: Richard Trevithick's first steam locomotive.</text>
        
        <text x="45" y="210" font-family="serif" font-size="11" fill="#755E4E" font-weight="bold">[Critical Analysis]</text>
        <text x="45" y="230" font-family="serif" font-size="11" fill="#222" style="font-style: italic;">Urbanization led to critical standard-of-living shifts,</text>
        <text x="45" y="250" font-family="serif" font-size="11" fill="#222" style="font-style: italic;">sparking statutory labor regulations in late 19th Century.</text>
        
        <rect x="45" y="270" width="120" height="20" rx="3" fill="#EAE0D5" />
        <text x="105" y="284" font-family="sans-serif" font-size="10" fill="#4A3B32" text-anchor="middle">Page 214 of 482</text>
      </svg>
    `)
  },
  {
    id: "empty_desk",
    name: "☕ Blank Table Surface (Invalid Check)",
    description: "An empty coffee table showing no homework, textbook, or notes.",
    category: "invalid",
    dataUrl: createSvgDataUrl(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#78350F"/>
        <!-- Table Wood Grain -->
        <line x1="0" y1="50" x2="400" y2="80" stroke="#92400E" stroke-width="3" />
        <line x1="0" y1="150" x2="400" y2="130" stroke="#92400E" stroke-width="4" />
        <line x1="0" y1="240" x2="400" y2="260" stroke="#92400E" stroke-width="3" />
        
        <!-- Solitary Coffee Mug -->
        <ellipse cx="200" cy="150" rx="25" ry="18" fill="#F3F4F6" stroke="#9CA3AF" stroke-width="2" />
        <ellipse cx="200" cy="147" rx="20" ry="13" fill="#451A03" />
        <!-- Mug handle -->
        <path d="M 225 150 C 245 150 245 135 221 135" fill="none" stroke="#F3F4F6" stroke-width="4" />
        
        <text x="200" y="220" font-family="sans-serif" font-size="12" fill="#FDE047" font-weight="bold" text-anchor="middle">Blank Table - No Study Material Detected</text>
        <text x="200" y="240" font-family="sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">(This should trigger a validation block for study slots)</text>
      </svg>
    `)
  },
  {
    id: "lazy_dog",
    name: "🐶 Cute Sleeping Puppy (Invalid Check)",
    description: "A cute dog sleeping on a sofa. Cute, but definitely not notes!",
    category: "invalid",
    dataUrl: createSvgDataUrl(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#93C5FD"/>
        <!-- Sofa bolster -->
        <rect x="20" y="160" width="360" height="120" rx="10" fill="#1E3A8A" />
        
        <!-- Sleeping Puppy -->
        <ellipse cx="180" cy="180" rx="35" ry="25" fill="#D97706" />
        <ellipse cx="210" cy="190" rx="25" ry="20" fill="#D97706" />
        <!-- Head -->
        <circle cx="155" cy="170" r="18" fill="#D97706" />
        <!-- Floppy Ear -->
        <path d="M 145 165 Q 135 190 145 195" fill="#78350F" />
        <!-- Closed Eyes -->
        <path d="M 150 172 Q 155 176 160 172" fill="none" stroke="#1F2937" stroke-width="2" />
        <!-- Snout -->
        <ellipse cx="165" cy="174" rx="5" ry="4" fill="#000" />
        <!-- Zzz levels -->
        <text x="220" y="130" font-family="sans-serif" font-size="18" fill="#1E3A8A" font-weight="bold">Zzz</text>
        <text x="245" y="110" font-family="sans-serif" font-size="13" fill="#1E3A8A">Zzz</text>
        
        <text x="200" y="50" font-family="sans-serif" font-size="14" fill="#1E3A8A" font-weight="bold" text-anchor="middle">Sleeping Dog - Non-study Image</text>
        <text x="200" y="70" font-family="sans-serif" font-size="10" fill="#1F2937" text-anchor="middle">(Fun test to verify Gemini flags incorrect material!)</text>
      </svg>
    `)
  }
];

// Helper to convert dynamic data URLs back to basic canvas objects if needed, but Base64 is sufficient
export async function convertSvgToJpegBase64(svgUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = svgUrl;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 300;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 400, 300);
        ctx.drawImage(img, 0, 0, 400, 300);
        // Extract as standard jpeg
        const dataStr = canvas.toDataURL("image/jpeg", 0.9);
        resolve(dataStr);
      } else {
        reject(new Error("Canvas context is null"));
      }
    };
    img.onerror = (e) => reject(e);
  });
}
