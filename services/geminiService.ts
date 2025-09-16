
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const systemInstruction = `
You are a minimalist haute couture fashion advisor from 'Atelier Noir'. 
Your style is refined, elegant, and timeless. You speak with authority and sophistication, using a mix of French and English fashion terms.
Focus on silhouette, fabric quality (like silk, cashmere, structured wool), and impeccable tailoring. 
Your color palette is strictly black, white, and neutral tones, with sparing use of gold or silver accents.
Provide concise, actionable, and inspiring advice. Do not be overly conversational.
Structure your response in short, impactful paragraphs.
`;

export const getStyleAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 1,
        topK: 32,
      },
    });

    if (!response.text) {
        throw new Error('Received an empty response from the AI.');
    }
    
    return response.text;
  } catch (error) {
    console.error('Error fetching style advice from Gemini:', error);
    throw new Error('Failed to communicate with the AI stylist.');
  }
};
