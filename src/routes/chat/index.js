const express = require('express')
const verifyToken = require('../../middleware/auth')
const chatRouter = express.Router()
const chatController = require('../../controllers/chatController')

//* Create a new chat
chatRouter.post('/', verifyToken, chatController.create)
//* Get chats
chatRouter.get('/', verifyToken, chatController.getChats)
//* Get a chat
chatRouter.get('/:chatId', verifyToken, chatController.get)

module.exports = chatRouter