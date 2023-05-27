const express = require('express')
const validator = require('validator')
const bcrypt = require('bcrypt')
const userRouter = express.Router()

const userModel = require('../../models/user.model')

userRouter.post('/signup', async (req, res) => {
    try {
        const {username, email, urlAvatar, password} = req.body

        if (!validator.isEmail(email) || await userModel.findOne({email}).lean()) {
            return res.status(403).json( {
                message: 'Email address is invalid or already exists'
            })
        }

        const user = await userModel.findOne({username}).lean()

        if (user) {
            return res.status(403).json( {
                message: 'Username already exists'
            })
        }

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({
            username, email, urlAvatar, password: passwordHash
        })

        if (newUser) {
            return res.status(200).json({
                message: 'Created User',
                data: {
                    username: newUser.username,
                    email: newUser.email
                }
            })
        }
        return res.status(403).json({
            message: 'huhu',
        })
    } catch (error) {
        console.log(error)
        return res.status(404);
    }
})

userRouter.post('/login', async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(404);
    }
})

module.exports = userRouter