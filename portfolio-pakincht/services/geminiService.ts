import { GoogleGenAI } from "@google/genai";
import { ABOUT_TEXT, EXPERIENCES, PROJECTS, SIDE_PROJECTS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Pakin Chitwaranggoon's portfolio website. Your name is "Pakin's Assistant".
The owner (Pakin) is a Product Designer with over 7 years of experience, currently at SCB TechX.

Owner background: ${ABOUT_TEXT}
Experience history: ${JSON.stringify(EXPERIENCES)}
Key Case Studies: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, year: p.year, impact: p.details?.impact })))}
Side Projects: ${JSON.stringify(SIDE_PROJECTS)}

Your goal is to answer visitor questions about Pakin's skills, work history, and design philosophy in a professional, helpful, and friendly tone.
Keep answers concise (under 100 words).
If asked about contact info, point them to the Email or LinkedIn buttons in the header.
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    // Safely access API key
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
      console.warn("Gemini API Key is missing.");
      return "I'm currently in offline mode because my API key is missing. Feel free to browse the portfolio directly!";
    }

    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini AI Communication Error:", error);
    return "I'm having a bit of trouble connecting right now. Please try again in a few moments!";
  }
};