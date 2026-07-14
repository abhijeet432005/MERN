const Groq = require("groq-sdk");
const systemInstruction = require('../prompts/system.prompt')

const groq = new Groq({
    apiKey: process.env.GROQ_API
});


// async function main() {
//     const stream = await getGroqChatStream("who are you");
//     for await (const chunk of stream) {
//         // Print the completion returned by the LLM.
//         process.stdout.write(chunk.choices[0]?.delta?.content || "");
//     }
// }

async function getGroqChatStream(messages) {
    return groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [

            {
                role: "system",
                content: systemInstruction,
            },
            ...messages

        ],
        stream: true,
    });
}

// main();

module.exports = {
    getGroqChatStream
}