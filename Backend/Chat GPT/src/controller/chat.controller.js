const chatModel = require('../model/chat.model')

const chatCreate = async (req, res) => {
    const { title } = req.body
    const user = req.user

    const chat = await chatModel.create({
        user: user._id,
        title
    })

    res.status(201).json({
        Message: "Chat created successfully !",
        chat
    })
}

module.exports = {
    chatCreate
}