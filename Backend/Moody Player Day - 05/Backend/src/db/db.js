const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.CONNECT_TO_DB).then(() => {
        console.log("Connected to Database")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToDB