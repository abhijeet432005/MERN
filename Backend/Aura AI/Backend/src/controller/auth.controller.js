const userModel = require("../model/user.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    const { fullName: { lastName, firstName }, email, password } = req.body

    const isUser = await userModel.findOne({
        email
    })

    if (isUser) {
        return res.status(409).json({
            Message: "User is already exist"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password: hashPassword
    })

    const token = jwt.sign({ id: user._id }, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(201).json({
        Message: "User Registered Successfully"
    })
}

const loginController = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({
            Message: "User not found, make sure you are valid user"
        })
    }

    const IsPassword = await bcrypt.compare(password, user.password)

    if (!IsPassword) {
        return res.status(400).json({
            Message: "Wrong password"
        })
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRETE_KEY)

    res.cookie("token", token)

    res.status(200).json({
        Message: "Login successfully"
    })
}

const logoutController = async (req, res) => {
    res.clearCookie("token")

    res.status(200).json({
        Message: "Logout successfully"
    })
}

const getProfileController = async (req, res) => {
    const user = await userModel.findById(req.user._id).select("-password")

    res.status(200).json({
        Message: "User profile fetched successfully",
        user
    })
}

module.exports = {
    registerController,
    loginController,
    getProfileController,
    logoutController
}