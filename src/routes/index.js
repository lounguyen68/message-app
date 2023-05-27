const express = require('express')
const router = express.Router()
const userRouter = require('./user')

router.use('/v1/api/', userRouter)

module.exports = router