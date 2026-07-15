const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')

const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies

    if(!token) {
        return res.status(401).json({
            Message: "Missing token, make sure you are login"
        })
    }

    try {

        const decode = jwt.verify(token, process.env.SECRETE_KEY)

        const user = await userModel.findOne({
            _id: decode.id
        })

        req.user = user
        next()
        
    } catch (error) {
        return res.status(401).json({
            Message: "Invalid Token"
        })
    }
}

module.exports = {
    authMiddleware
}