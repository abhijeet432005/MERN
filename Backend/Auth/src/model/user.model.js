const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    password: String
})

const userModel = mongoose.model("userModel", userSchema)

module.exports = userModel