const express = require('express')
const ConnectToDB = require('./db/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

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
app.use(express.static(path.join(__dirname, '../public')))


// Using Routes 

app.use("/api/auth", authRoute)
app.use("/api/chat", chatRoute)
app.use("/api/message", messageRoute)


app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app