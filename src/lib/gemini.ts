import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Please define GEMINI_API_KEY in your .env.local file");
}

export const ai = new GoogleGenAI({
  apiKey,
});

export async function generateAIResponse(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}