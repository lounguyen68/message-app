const express = require('express')
const verifyToken = require('../../middleware/auth')
const userRouter = express.Router()
const userController = require('../../controllers/userController')

//*SignUp Feature
userRouter.post('/signup', userController.signUp)
//*Login Feature
userRouter.post('/login', userController.logIn)
//*Logout Feature
userRouter.delete('/logout',verifyToken, userController.logOut)
//* Get new AccessToken
userRouter.post('/token', userController.getToken)
//*Get user's information 
userRouter.get('/infor/:username', verifyToken, userController.getUser)

module.exports = userRouter