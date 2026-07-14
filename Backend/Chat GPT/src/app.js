const express = require('express')
const authRoutes = require('../src/routes/auth.routes')
const chatRoutes = require("./routes/chat.routes")
const cookieParser = require('cookie-parser')

// Create Express application
const app = express()

// Middleware to parse incoming JSON request bodies
app.use(express.json())

// Middleware to parse cookies from the request
app.use(cookieParser())

// Authentication routes
app.use("/auth", authRoutes)

// Chat routes
app.use("/chat", chatRoutes)


// Export app so it can be used in server.js
module.exports = app
