const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')

const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies
    // console.log(token)

    if (!token) {
        res.status(401).json({
            Message: "Unauthrozied"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRETE_KEY)

        const user = await userModel.findOne({
            _id: decoded.id
        }).select("-password -__v").lean()

        // res.status(200).json([
        //     user
        // ])

        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({
            Message: "Unauthrozieds"
        })
    }
}

module.exports = {
    authMiddleware
}