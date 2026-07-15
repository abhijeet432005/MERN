const express = require('express')
const ConnectToDB = require('./db/db')
const cookieParser = require('cookie-parser')

// Routes 
const authRoute = require('./routes/auth.route')
const chatRoute = require('./routes/chat.route')

ConnectToDB()

const app = express()
app.use(cookieParser())
app.use(express.json())


// Using Routes 

app.use("/api/auth", authRoute)
app.use("/api/chat", chatRoute)

module.exports = app