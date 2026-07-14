// const express = require('express')

// const app = express()
// app.use(express.json())

// let notes = []

// app.post("/notes", (req, res) => {
//     // console.log(req.body)
//     notes.push(req.body)
//     res.json({
//         Message: "Successfull"
//     })
// })

// app.get("/notes", (req, res) => {
//     res.send(notes)
// })

// app.delete("/notes/:index", (req, res) => {
//     const index = req.params.index
//     delete notes[index]
//     res.json({
//         Message: "Deleted"
//     })
// })

// app.patch("/notes/:index", (req, res) => {
//     const index = req.params.index
//     const {title} = req.body

//     notes[index].title = title

//     res.json({
//         Message: "Update Successfull" 
//     })
// })


// app.listen(3000, () => {
//     console.log("server is running")
// })






const express = require('express')


const app = express()
app.use(express.json())

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body)

    res.json({
        Message: "Successfull"
    })
})

app.get('/notes', (req, res) => {
    res.send({
        notes
    })
})

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.json({
        Message: "Deleted"
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const {tittle} = req.body

    notes[index].tittle = tittle

    res.json({
        Message: "Updated"
    })
})



app.listen(3000, () => (
    console.log("Server is running")
))