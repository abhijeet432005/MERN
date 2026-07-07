const expres = require('express')
const userModel = require("../model/user.model")
const jwt = require('jsonwebtoken')
const router = expres.Router()

router.post("/register", async (req, res) => {
    const { userName, password } = req.body

    const isUser = await userModel.findOne({
        userName
    }).select("-password").lean()

    if (isUser) {
        return res.status(409).json({
            Message: "User is already existed"
        })
    }

    const user = await userModel.create({
        userName, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(200).json({
        Message: "User registered successfully"
    })
})


module.exports = router