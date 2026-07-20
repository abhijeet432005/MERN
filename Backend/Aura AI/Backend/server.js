require('dotenv').config()
const app = require('./src/app')
const initSocketServer = require('./src/socket/socket.server')
const { createServer } = require('http')
const httpServer = createServer(app)

initSocketServer(httpServer)

httpServer.listen("3000", () => {
    console.log('Server is running on port 3000')
})