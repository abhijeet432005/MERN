const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerController = async (req, res) => {
    const { email, password, fullName: { firstName, lastName } } = req.body
    console.log(lastName)

    const isUser = await userModel.findOne({
        email
    })

    if (isUser) {
        return res.status(409).json({
            Message: "User Already Exist"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        email,
        fullName: {
            firstName,
            lastName
        },
        password: hashPassword
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(200).json({
        user
    })
}

const loginController = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({
        email
    }).select("-fullName -__v")

    if(!user) {
        return res.status(401).json({
            Message: "User not found, please register !"
        })
    }

    const isPasswaord = await bcrypt.compare(password, user.password)

    if(!isPasswaord){
        return res.status(401).json({
            Message: "Wrong Password"
        })
    }

    const token = jwt.sign({ id: user._id}, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(200).json({
        Message: "User Login Successfully !"
    })
}

module.exports = {
    registerController,
    loginController
}