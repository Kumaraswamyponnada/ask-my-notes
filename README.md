
# AskMyNotes – AI that Understands Student Notes

AskMyNotes is a high-performance, SaaS-style study tool designed to help students turn disorganized notes into structured knowledge. By combining user-provided notes with curated "Reference Datasets," it leverages Google Gemini 3 to provide deep insights and exam preparation materials.

## Features
- **Intelligent Grounding (RAG-style):** Uses expert-curated content (Python, DSA, ML) as context to ensure the AI's explanations are academically rigorous.
- **Three-Tiered Analysis:**
  - **Simple Explanation:** For immediate conceptual understanding.
  - **Concise Summary:** For quick revision and highlighting key points.
  - **Exam-Focused Questions:** Tailored challenges to test your knowledge.
- **SaaS UI:** Clean, responsive, and professional interface built with Tailwind CSS.
- **Fast Performance:** Optimized using the latest Gemini 3 Flash model for near-instant responses.

## Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **AI:** Google Gemini 3 API (via `@google/genai`)
- **Runtime:** ESM / Browser

## How to Run Locally
1. Clone the project.
2. Install dependencies: `npm install` (Note: Ensure you have `node` and `npm` installed).
3. Set your Google AI API Key as an environment variable: `API_KEY=your_api_key_here`.
4. Run the development server: `npm run dev`.

## How Datasets Improve Answers
Rather than relying purely on pre-trained weights, AskMyNotes provides specific "Reference Datasets" to the model. This acts as an anchor (grounding context), ensuring that even if user notes are slightly vague, the AI uses standard academic definitions for its explanation and question generation.

## Hackathon Usage
This project is designed for immediate demonstration. It features error handling, loading states, and a polished aesthetic that stands out in judging.
