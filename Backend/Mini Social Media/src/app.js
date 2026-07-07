require('dotenv').config()
const express = require('express')
const ConnectToDB = require('./db/db')
const authRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

ConnectToDB()

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/auth", authRoutes)

module.exports = app