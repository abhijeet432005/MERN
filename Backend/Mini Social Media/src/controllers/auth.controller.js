const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerController = async (req, res) => {
    const { userName, password } = req.body

    const isUserAlreadyExist = await userModel.findOne({
        userName
    })

    if (isUserAlreadyExist) {
        return res.status(401).json({
            Message: "User is already existed"
        })
    }

    const user = userModel.create({
        userName, 
        password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(200).json({
        Message: "user registered successfully"
    })

}

const loginController = async (req, res) => {
    const { userName, password } = req.body

    const user = await userModel.findOne({
        userName
    })

    if (!user) {
        return res.status(400).json({
            Message: "User not found"
        })
    }

    const isPassword = await bcrypt.compare(password, user.password)

    if (!isPassword) {
        return res.status(400).json({
            Message: "Password is worng"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(200).json({
        Message: "Login Successfully"
    })


}

module.exports = {
    registerController,
    loginController
}