const express = require('express')
const { authMiddleware } = require('../middleware/auth.middleware')
const { chatCreate, getAllChat, deleteChat, renameChat } = require('../controller/chat.controller')
const routes = express.Router()

routes.post("/", authMiddleware, chatCreate)
// get all chat
routes.get("/allChats", authMiddleware, getAllChat)

// delete chat
routes.delete('/:chatId', authMiddleware, deleteChat)

// rename chat
routes.patch('/:chatId', authMiddleware, renameChat)
module.exports = routes