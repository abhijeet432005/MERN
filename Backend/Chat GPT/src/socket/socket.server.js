const { Server } = require('socket.io')
const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')
const messageModel = require("../model/message.mode")
const { getGroqChatStream } = require('../services/ai.service')

function initSocketServer(httpServer) {
    const io = new Server(httpServer, {})

    io.use(async (socket, next) => {
        const cookies = cookie.parseCookie(socket.handshake.headers?.cookie || "")

        if (!cookies.token) {
            next(new Error("Authentication Error: No Token Found"))
        }

        try {
            const decode = jwt.verify(cookies.token, process.env.SECRETE_KEY)

            const user = await userModel.findById({
                _id: decode.id
            }).select("-password -fullName -__v").lean()

            socket.user = user

            next()
        } catch (error) {
            next(new Error("Authentication Error: Invalid Token"))
        }
    })

    io.on("connection", (socket) => {

        socket.on("ai-message", async (payload) => {

            /*
                payload: {
                    chat: chat id,
                    content: message -> (Hello AI !)
                }
            */

            await messageModel.create({
                chat: payload.chat,
                user: socket.user._id,
                content: payload.content,
                role: "user",
            })

            const chatHistory = await messageModel.find({
                chat: payload.chat
            })

            const stream = await getGroqChatStream(chatHistory.map(item => (
                {
                    role: item.role,
                    content: item.content
                }
            )))
            let fullResponse = ""

            for await (const chunk of stream) {
                const text = chunk.choices[0]?.delta?.content || ""

                fullResponse += text

                socket.emit("ai-response", {
                    content: text
                })
            }

            await messageModel.create({
                chat: payload.chat,
                user: socket.user._id,
                content: fullResponse,
                role: "assistant",
            })

            console.log("AI Resposne: ", fullResponse)
        })
    })
}

module.exports = initSocketServer