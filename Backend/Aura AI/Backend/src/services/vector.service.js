const { Pinecone } = require('@pinecone-database/pinecone')

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

const AuraAiIndex = pc.Index('aura-ai')

async function createMemory({ MessageID, metadata, Vectors }) {
    await AuraAiIndex.upsert(
        {
            records: [
                {
                    id: MessageID,
                    values: Vectors,
                    metadata
                }
            ]
        }
    )
}

async function queryMemory({ queryVector, limit = 5, metadata }) {
    const data = await AuraAiIndex.query({
        vector: queryVector,
        topK: limit,
        filter: metadata ? metadata : undefined,
        includeMetadata: true
    })

    return data.matches
}

module.exports = {
    createMemory,
    queryMemory
}