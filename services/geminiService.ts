
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult, DatasetType } from "../types";
import { DATASETS } from "../constants";

export async function analyzeNotes(notes: string, datasetId: DatasetType): Promise<AnalysisResult> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing. Please ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const dataset = DATASETS.find(d => d.id === datasetId);
  
  const prompt = `
    You are an expert academic tutor. 
    Primary Input (User's Study Notes): "${notes}"
    Reference Grounding Context (Use this to enhance and verify accuracy): "${dataset?.content}"

    Your task:
    1. SIMPLE EXPLANATION: Explain the concepts in the notes in a student-friendly, conversational manner.
    2. CONCISE SUMMARY: Provide a bulleted summary of the most important points.
    3. EXAM QUESTIONS: Generate 3 to 5 challenging exam-focused questions based on this content.

    Return the response strictly in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            explanation: {
              type: Type.STRING,
              description: "A student-friendly explanation of the notes.",
            },
            summary: {
              type: Type.STRING,
              description: "A concise summary of the notes.",
            },
            examQuestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of exam-oriented questions.",
            },
          },
          required: ["explanation", "summary", "examQuestions"],
        },
      },
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");
    
    return JSON.parse(resultText) as AnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
}
