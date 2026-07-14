const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect('mongodb+srv://abhijeet42kumar_db_user:6aQvqL237NUb7aWZ@cluster0.ieic85a.mongodb.net/notes')
    .then(() => {
        console.log("Connected to Database")
    })
}

module.exports = connectToDB 