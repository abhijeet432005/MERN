const Groq = require("groq-sdk");
const systemPrompt = require("../prompts/system.prompt");

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
    stream: true,
  });
}

module.exports = getGroqChatStream