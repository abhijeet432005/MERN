require('dotenv').config()
const express = require('express')
const connectToDB = require('./db/db')
const songRoute = require('./routes/song.routes')

connectToDB()
const app = express()
app.use(express.json())

app.use("/", songRoute)


module.exports = app