const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/notes.model')


connectToDB()
const app = express()
app.use(express.json())


app.post('/notes', async (req, res) => {
    const { title, content } = req.body

    await noteModel.create({
        title,
        content
    })

    res.json({
        Message: "Successfull"
    })
})


app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.json({
        Message: "Fetched Successfully",
        notes
    })
})


app.patch('/notes/:id', async (req, res) => {
    const index = req.params.id
    const { title } = req.body

    await noteModel.findOneAndUpdate({
        _id: index

    }, {
        title: title
    })

    res.json({
        Message: "Update"
    })
})


app.delete('/notes/:id', async (req, res) => {
    const index = req.params.id∫

    await noteModel.findOneAndDelete(
        { _id: index }
    )

    res.json({
        Message: "Deleted"
    })
})

app.listen(3000, () => {
    console.log("Server is running")
})