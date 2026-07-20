const express = require('express')
const { registerController, loginController, logoutController, getProfileController } = require('../controller/auth.controller')
const { authMiddleware } = require('../middleware/auth.middleware')
const routes = express.Router()

routes.post("/register", registerController)
routes.post("/login", loginController)
routes.post("/logout", logoutController)
routes.get("/profile", authMiddleware, getProfileController)


module.exports = routes