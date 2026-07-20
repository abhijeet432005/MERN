const Groq = require("groq-sdk");
const systemPrompt = require("../prompts/system.prompt");

const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({});

async function generateVectors(content) {
  const response = await ai.models.embedContent({
    model: 'gemini-embedding-001',
    contents: `${content}`,
    config: { outputDimensionality: 768 },
  });

  return response.embeddings[0].values
}


const groq = new Groq({
  apiKey: process.env.GROQ_API
});



async function getGroqChatStream(messages) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages
    ],

    model: "openai/gpt-oss-20b",
    temperature: 0.7,
    stream: true,
  });
}

module.exports = { getGroqChatStream, generateVectors }