const express = require('express');
const { authMiddleware } = require('../middleware/auth.middleware');
const { getMessages } = require('../controller/message.controller');
const routes = express.Router()

// get all messages
routes.get("/:chatId", authMiddleware, getMessages);

module.exports = routes