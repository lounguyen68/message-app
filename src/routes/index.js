const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const chatRouter = require('./chat')
const messageRouter = require('./message')

router.use('/users', userRouter)
router.use('/chats', chatRouter)
router.use('/messages', messageRouter)

module.exports = router