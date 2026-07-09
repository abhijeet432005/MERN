const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_KEY
});


async function genrateCaption(base64ImageFile) {
    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        config: {
            systemInstruction: `
                You are a Mumbai tapori caption writer.
                Write captions in tapori slang.
                Use words like "apun", "jhakaas", "scene", "bhidu", "ek number" naturally.
                Keep it funny and entertaining.
                Add emojis and 5 hashtags.
                Return only the caption.
            `
        },
        contents: contents,
    });

    return response.text
}


module.exports = genrateCaption