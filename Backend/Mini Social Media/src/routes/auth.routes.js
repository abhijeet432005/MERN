const expres = require('express')
const userModel = require("../model/user.model")
const jwt = require('jsonwebtoken')
const { registerController, loginController } = require('../controllers/auth.controller')
const router = expres.Router()

router.post("/register", registerController)
router.post("/login", loginController)


module.exports = router