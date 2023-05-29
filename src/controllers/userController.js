const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')


//*Generate AccessToken, RefreshToken
const generateTokens = async user => {
    const data = {
        id: user._id,
        username: user.username
    }
    const accessToken = await jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '2 days'
    })
    const refreshToken = await jwt.sign(data, process.env.REFRESH_TOKEN_SECRET,{
        expiresIn: '7 days'
    })
    return { accessToken, refreshToken }
}
//*Update user's RefreshToken
const updateRefreshToken = async (username, refreshToken) => {
    const user = await userModel.findOneAndUpdate({username}, { refreshToken })
    return user
}

module.exports = {
    signUp: async (req, res) => {
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
                username, email, urlAvatar, password: passwordHash, refreshToken: null
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
    },
    logIn: async (req, res) => {
        try {
            const {username, password} = req.body
    
            //TODO check username in db
            const user = await userModel.findOne({username})
            if (!user) {
                return res.status(403).json( {
                    message: 'Incorrect username or password'
                })
            }
            //TODO check password in db
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(403).json( {
                    message: 'Incorrect username or password'
                })
            }
            //TODO create and send accesstoken, refreshtoken to user
            const tokens = await generateTokens(user)
            updateRefreshToken(username, tokens.refreshToken)
            res.status(201).json(tokens)
        } catch (error) {
            return res.status(404).json({
                message: error
            });
        }
    },
    logOut: async (req, res) => {
        await userModel.findOneAndUpdate({username: req.username}, {refreshToken: null})
        res.sendStatus(200)
    },
    getToken: async (req, res) => {
        const {refreshToken} = req.body
        if (!refreshToken) return res.sendStatus(401)
    
        const user = await userModel.findOne({ refreshToken })
        if (!user) return res.sendStatus(403)
    
        try {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    
            const tokens = await generateTokens(user)
            await updateRefreshToken(user.username, tokens.refreshToken)
            res.status(200).json(tokens)
        } catch (error) {
            console.log(error)
            return res.status(403)
        }
    },
    getUser: async (req, res) => {
        const username = req.params.username
    
        const user = await userModel.findOne({ username })
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        const data = {
            id: user._id.toString(),
            username: user.username,
            urlAvatar: user.urlAvatar
        }
        res.status(200).json(data)
    }
}
