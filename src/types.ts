export interface Habit {
  id: string;
  name: string;
  time: string; // "HH:MM" 24 hour format
  endTime?: string; // E.g. "18:00" for 5-6 PM study
  phoneAllowed: boolean; // Is phone usage permitted?
  isCompulsoryUpload: boolean; // Does this completion require a study notes photo?
  points: number;
  completed: boolean;
  uploadedPhoto?: {
    dataUrl: string;
    description: string;
    score: number;
    feedback: string;
  };
  isCustom?: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface MockMessage {
  sender: string;
  text: string;
  avatar: string;
}

export interface ReelPost {
  id: string;
  creator: string;
  title: string;
  likes: string;
  comments: string;
  colorClass: string;
}
