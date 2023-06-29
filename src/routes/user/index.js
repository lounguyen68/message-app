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
userRouter.get('/infor/:id', verifyToken, userController.getUser)
//* Send friend request
userRouter.post('/request', verifyToken, userController.friendRequest)
//* Accept friend request
userRouter.post('/friend', verifyToken, userController.friendAccept)
//* Get friends list
userRouter.get('/friends', verifyToken, userController.getFriends)
//* Get requests list
userRouter.get('/requests', verifyToken, userController.getRequests)
//* Search users
userRouter.post('/search', verifyToken, userController.search)
module.exports = userRouter