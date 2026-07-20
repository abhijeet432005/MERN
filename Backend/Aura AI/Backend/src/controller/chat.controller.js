const chatModel = require('../model/chat.model')

const chatCreate = async (req, res) => {
    try {
        const { title } = req.body
        const user = req.user

        const chat = await chatModel.create({
            user: user._id,
            title: title || "New Chat"
        })

        res.status(201).json({
            Message: "Chat Created",
            chat
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to create chat"
        });
    }
}

const getAllChat = async (req, res) => {
    try {
        const user = req.user

        const chats = await chatModel.find({
            user: user._id
        })

        res.status(200).json({
            Message: "All Chats",
            chats
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to get chats"
        });
    }
}

const deleteChat = async (req, res) => {
    try {
        const { chatId } = req.params
        const user = req.user

        const chat = await chatModel.findOneAndDelete({
            _id: chatId,
            user: user._id
        })

        if (!chat) {
            return res.status(404).json({
                message: "Chat not found"
            })
        }

        res.status(200).json({
            message: "Chat deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete chat"
        });
    }
}

const renameChat = async (req, res) => {
    try {
        const { chatId } = req.params
        const { title } = req.body
        const user = req.user
        console.log("chatId", chatId)
        console.log("title", title)
        console.log("user", req.user._id)

        const chat = await chatModel.findOneAndUpdate({
            _id: chatId,
            user: user._id
        }, {
            title: title
        })

        if (!chat) {
            return res.status(404).json({
                message: "Chat not found"
            })
        }

        res.status(200).json({
            message: "Chat renamed successfully",
            chat
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to rename chat"
        });
    }
} 

module.exports = {
    chatCreate,
    getAllChat,
    deleteChat,
    renameChat
}