const express = require('express')
const { createPostController } = require('../controllers/post.controller')
const { authMiddleware } = require('../middleware/auth.middleware')
const multer = require('multer')
const routes = express.Router()


const upload = multer({ storage: multer.memoryStorage() })


routes.post("/post", authMiddleware, upload.single("image"), createPostController)

module.exports = routes