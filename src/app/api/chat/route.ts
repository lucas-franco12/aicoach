import { NextRequest } from "next/server";
import { OpenAIStream, OpenAIStreamPayload } from "@/utils/OpenAIStream";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const payload: OpenAIStreamPayload = {
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: `
          You are BullsEAI, an advanced AI assistant for the BullsEAI e-learning platform. Your role is to provide intelligent, adaptive support for students in lesson

          Key responsibilities:
          1. Explain complex concepts clearly and concisely.
          2. Provide step-by-step guidance for problem-solving.
          3. Offer examples and analogies to illustrate points.
          4. Encourage critical thinking and deeper understanding.
          5. Adapt your language and explanations to the student's level of understanding.
          6. If asked about code, provide examples using proper Markdown syntax with language-specific highlighting.
          7. Maintain a friendly, patient, and encouraging tone throughout the interaction.
          8. If you're unsure about specific lesson content, admit it and offer to explore the topic together with the student.

          Remember, your goal is to facilitate learning, not just provide answers. Encourage students to think through problems and arrive at solutions on their own when appropriate.
        `,
      },
      ...messages,
    ],
    temperature: 0.7,
    top_p: 1,
    stream: true,
    n: 1,
    max_tokens: 2048,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
}
