const { Server } = require('socket.io')
const userModel = require("../model/user.model")
const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const aiServece = require('../services/ai.service')
const messageModel = require('../model/message.model')
const { createMemory, queryMemory } = require('../services/vector.service')


function initSocketServer(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173",
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true
        }
    })

    io.use(async (socket, next) => {
        const cookies = cookie.parseCookie(socket.handshake.headers?.cookie || "")

        if (!cookie) {
            next(new Error("Authentication Error: Token not found"))
        }

        try {
            const decode = jwt.verify(cookies.token, process.env.SECRETE_KEY)

            const user = await userModel.findOne({
                _id: decode.id
            }).select('-password -fullName -__v').lean()

            socket.user = user
            next()

        } catch (error) {
            next(new Error("Authenctication Error: Invalid token"))
        }
    })

    io.on("connection", (socket) => {

        socket.on("ai-message", async (payload) => {

            try {


                /*
                const message = await messageModel.create({
                    user: socket.user._id,
                    chat: payload.chat,
                    content: payload.content,
                    role: "user"
                })

                const embeddingResponse = await aiServece.generateVectors(payload.content)
                */

                const [message, embeddingResponse] = await Promise.all([
                    messageModel.create({
                        user: socket.user._id,
                        chat: payload.chat,
                        content: payload.content,
                        role: "user"
                    }),
                    aiServece.generateVectors(payload.content)
                ])

                /*
                const memory = await queryMemory({
                    limit: 3,
                    queryVector: embeddingResponse,
                    metadata: {
                        user: socket.user._id
                    }
                })

                const chatHistory = (await messageModel.find({
                    chat: payload.chat
                }).sort({ createdAt: -1 }).limit(10).lean()).reverse()

                */

                const [memory, chatHistory] = await Promise.all([
                    queryMemory({
                        limit: 3,
                        queryVector: embeddingResponse,
                        metadata: {
                            user: socket.user._id
                        }
                    }),
                    (messageModel.find({
                        chat: payload.chat
                    }).sort({ createdAt: -1 }).limit(10).lean()).then(messages => messages.reverse())
                ])

                await createMemory({
                    MessageID: message._id,
                    Vectors: embeddingResponse,
                    metadata: {
                        chat: payload.chat,
                        user: socket.user._id,
                        text: payload.content
                    }
                })


                const STM = chatHistory.map(item => ({
                    role: item.role,
                    content: item.content,
                }))


                const LTM = [
                    {
                        role: "system",
                        content: `
                            These are relevant memories retrieved from the user's long-term memory.

                            Use them only if they are relevant to the current question.

                            Ignore any memory that is unrelated.

                            ${memory.map(item => item.metadata.text).join("\n")
                            }
                        `
                    }
                ]



                const stream = await aiServece.getGroqChatStream([...LTM, ...STM])

                let fullResponse = ""

                for await (const chunk of stream) {
                    let text = chunk.choices[0]?.delta?.content || ""

                    fullResponse += text

                    socket.emit("ai-response", {
                        content: text
                    })
                }
                socket.emit("ai-complete");
                
                /*
                const responseMessage = await messageModel.create({
                    user: socket.user._id,
                    chat: payload.chat,
                    content: fullResponse,
                    role: "assistant"
                })

                const responseVectors = await aiServece.generateVectors(fullResponse)

                */

                const [responseMessage, responseVectors] = await Promise.all([
                    messageModel.create({
                        user: socket.user._id,
                        chat: payload.chat,
                        content: fullResponse,
                        role: "assistant"
                    }),
                    aiServece.generateVectors(fullResponse)
                ])

                await createMemory({
                    MessageID: responseMessage._id,
                    Vectors: responseVectors,
                    metadata: {
                        chat: payload.chat,
                        user: socket.user._id,
                        text: fullResponse
                    }
                })

            } catch (error) {
                console.error(error);

                socket.emit("ai-error", {

                    message: "Something went wrong."

                });
            }

        })
    })
}

module.exports = initSocketServer