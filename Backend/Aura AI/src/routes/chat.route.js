const express = require('express')
const { authMiddleware } = require('../middleware/auth.middleware')
const { chatCreate } = require('../controller/chat.controller')
const routes = express.Router()

routes.post("/", authMiddleware, chatCreate)

module.exports = routes