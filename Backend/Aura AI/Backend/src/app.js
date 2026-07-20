const express = require('express')
const ConnectToDB = require('./db/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// Routes 
const authRoute = require('./routes/auth.route')
const chatRoute = require('./routes/chat.route')
const messageRoute = require('./routes/message.route')

ConnectToDB()

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(cookieParser())
app.use(express.json())


// Using Routes 

app.use("/api/auth", authRoute)
app.use("/api/chat", chatRoute)
app.use("/api/message", messageRoute)

module.exports = app