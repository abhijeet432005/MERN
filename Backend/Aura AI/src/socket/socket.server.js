const { Server } = require('socket.io')
const userModel = require("../model/user.model")
const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const getGroqChatStream = require('../services/ai.service')
const messageModel = require('../model/message.model')

function initSocketServer(httpServer) {
    const io = new Server(httpServer, {})

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
                await messageModel.create({
                    user: socket.user._id,
                    chat: payload.chat,
                    content: payload.content,
                    role: "user"
                })

                const chatHistory = (await messageModel.find({
                    chat: payload.chat
                }).sort({ createdAt: -1 }).limit(10).lean()).reverse()



                const stream = await getGroqChatStream(chatHistory.map(item => ({
                    role: item.role,
                    content: item.content,
                })))

                let fullResponse = ""

                for await (const chunk of stream) {
                    let text = chunk.choices[0]?.delta?.content || ""

                    fullResponse += text

                    socket.emit("ai-response", {
                        content: text
                    })
                }

                await messageModel.create({
                    user: socket.user._id,
                    chat: payload.chat,
                    content: fullResponse,
                    role: "assistant"
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