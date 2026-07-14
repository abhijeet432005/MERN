const ImageKit = require('imagekit')
const mongoose = require('mongoose')

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint: process.env.IMAGEKIT_URLENDPOINT
})

function fileUpload(file) {
    return new Promise((ressolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            fileName: new mongoose.Types.ObjectId().toString(),
            folder: "moddy-player"
        }, (error, result) => {
            if(error) {
                reject(error)
            }
            else {
                ressolve(result)
            }
        })
    })
}

module.exports = fileUpload