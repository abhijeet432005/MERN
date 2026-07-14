const express = require('express')

const app = express() // server is created

app.get('/home', (req, res) => {
    res.send("Welcome to the home")
})

app.get('/about', (req, res) => {
    res.send('Welcome to the about page')
})

app.listen(3000, () => {
    console.log("Server is running")
})

