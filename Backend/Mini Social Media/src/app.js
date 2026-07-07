require('dotenv').config()
const express = require('express')
const ConnectToDB = require('./db/db')

ConnectToDB()

const app = express()

module.exports = app