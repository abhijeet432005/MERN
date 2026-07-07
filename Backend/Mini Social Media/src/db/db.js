const mongoose = require('mongoose')

const ConnectToDB = () => {
    mongoose.connect(process.env.CONNECT_TO_DB).
    then(() => {
        console.log("Connect to Databse")
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = ConnectToDB