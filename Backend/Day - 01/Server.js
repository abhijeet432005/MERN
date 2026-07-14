const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        return res.end("Home")
    }
    if(req.url == "/shop"){
        return res.end("Shop")
    }
    res.end()
})

server.listen(3000, () => {
    console.log("I am listening")
})