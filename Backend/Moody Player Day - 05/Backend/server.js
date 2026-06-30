require('dotenv').config()
const express = require('express')
const connectToDb = require('./src/db/db')

connectToDb()
const app = express()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
