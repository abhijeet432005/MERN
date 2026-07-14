require("dotenv").config()
const app = require("./src/app")
const ConnectToDB = require('./src/db/db')
const { createServer } = require('http')
const initSocketServer = require("./src/socket/socket.server")
const httpServer = createServer(app)


ConnectToDB()
initSocketServer(httpServer)

httpServer.listen("3000", () => {
    console.log("Server is running on port 3000")
})