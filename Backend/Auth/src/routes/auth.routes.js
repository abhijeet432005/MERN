const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')


routes.post("/register", async (req, res) => {
    const { userName, password } = req.body

    const isUser = await userModel.findOne({
        userName: userName
    })

    if (isUser) {
        return res.status(409).json({
            Message: "User already exist"
        })
    }

    const user = await userModel.create({
        userName, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRETE)

    res.cookie("token", token, {
        httpOnly: true
    })

    res.status(201).json({
        Message: "Account Created",
        user,
        token
    })


})

routes.post("/login", async (req, res) => {
    const { userName, password } = req.body

    const isUser = await userModel.findOne({
        userName: userName,
    })

    if (!isUser) {
        return res.status(401).json({
            Message: "User name is no exist, Unauthorized"
        })
    }

    const isPassword = password === isUser.password

    if (!isPassword) {
        return res.status(401).json({
            Message: "Wrong password, Unauthorized"
        })
    }

    const token = jwt.sign({
        id: isUser._id
    }, process.env.JWT_SECRETE)

    res.cookie("token", token, {
        httpOnly: true,
    });

    res.status(200).json({
        Message: "Login Successfully",
        isUser,
        token
    })


})

routes.get("/user", async (req, res) => {
    const { token } = req.cookies
    console.log(token)

    if (!token) {
        return res.status(401).json({
            Message: "Unauthrized"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRETE)

        const user = await userModel.findOne({
            _id: decode.id
        }).select("-password").lean()

        res.status(200).json({
            Message: "User Data Fetched Successfully",
            user
        })
    } catch (error) {
        return res.status(401).json({
            Message: "Unauthorized"
        })
    }
})

module.exports = routes