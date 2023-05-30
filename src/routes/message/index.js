const express = require('express')
const verifyToken = require('../../middleware/auth')
const messageRouter = express.Router()
const messageController = require('../../controllers/messageController')

//* Create a new message
messageRouter.post('/', verifyToken, messageController.createMessage)
//* Get messages
messageRouter.get('/:chatId', verifyToken, messageController.getMessages)

module.exports = messageRouter