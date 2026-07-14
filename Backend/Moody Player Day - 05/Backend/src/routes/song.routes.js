const express = require('express')
const routes = express.Router()
const multer = require('multer')
const fileUpload = require('../service/song.storage')
const songModel = require('../model/song.model')

const upload = multer({storage: multer.memoryStorage()})

routes.post('/songs', upload.single("audio") , async (req, res) => {
    const {title, artist, mood} = req.body 
    const file = await fileUpload(req.file)
    console.log(file)

    const song = await songModel.create({
        title: title,
        artist: artist,
        mood: mood,
        audio: file.url
    })

    res.status(200).json({
        message: "Done"
    })
})

routes.get('/songs', async (req, res) => {
    const { mood } = req.query

    const song = await songModel.find({
        mood: mood
    })


    res.status(200).json({
        song: song
    })

})


module.exports = routes