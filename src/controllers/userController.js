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
        expiresIn: '1 days'
    })
    const refreshToken = await jwt.sign(data, process.env.REFRESH_TOKEN_SECRET,{
        expiresIn: '3 days'
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

            const passwordHash = await bcrypt.hashSync(password, 10);
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
            return res.status(404)
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
            const match = await bcrypt.compareSync(password, user.password);
            if (!match) {
                return res.status(403).json( {
                    message: 'Incorrect username or password'
                })
            }
            //TODO create and send accesstoken, refreshtoken to user
            const tokens = await generateTokens(user)
            updateRefreshToken(username, tokens.refreshToken)
            res.status(200).json({userInfo: {
                id: user.id,
                username: username,
                email: user.email,
                urlAvatar: user.urlAvatar
            }, userToken: tokens})
        } catch (error) {
            return res.status(404).json({
                message: error
            });
        }
    },
    logOut: async (req, res) => {
        const user = await userModel.findOneAndUpdate({_id: req.id}, {refreshToken: null})
        if (!user) {
            res.sendStatus(403)
        }
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
        const id = req.params.id
    
        const user = await userModel.findOne({ _id: id })
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
    },
    friendRequest: async (req, res) => {
        const { senderId, recipientId } = req.body
        if (senderId != req.id) {
            return res.status(404).json({message: 'Invalid access'})
        }
        try {
            const sender = await userModel.findOne({_id: senderId})
            const recipient = await userModel.findOne({_id: recipientId})
      
            if (!recipient || !sender) {
                return res.status(404).json({ error: 'User not found' })
            }
      
            const existingRequest = recipient.friendRequests.find(
                (request) => request.sender.toString() === senderId,
            )
      
            if (existingRequest) {
                return res.status(400).json({ error: 'Friend request already sent' })
            }
        
            recipient.friendRequests.push({ sender: senderId })
            await recipient.save()
        
            res.json({ message: 'Friend request sent' })
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Failed to send friend request' })
        }
    },
    friendAccept: async (req, res) => {
        const { senderId, accepterId } = req.body
        if (accepterId != req.id) {
            return res.status(404).json({message: 'Invalid access'})
        }
        try {
            const sender = await userModel.findOne({_id: senderId})
            const accepter = await userModel.findOne({_id: accepterId})
        
            if (!sender || !accepter) {
                return res.status(404).json({ error: 'User not found' })
            }
        
            const existingRequest = accepter.friendRequests.find(
                (request) => request.sender.toString() === senderId,
            )
        
            if (!existingRequest) {
                return res.status(400).json({ error: 'Friend request not found' })
            }
        
            accepter.friendRequests = accepter.friendRequests.filter(
                (request) => request.sender.toString() !== senderId,
            )
            accepter.friends.push(senderId)
            sender.friends.push(accepterId)
            await accepter.save()
            await sender.save()
        
            res.json({ message: 'Friend request accepted' });
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Failed to accept friend request' })
        }
    },
    getFriends: async (req, res) => {
        try {
            const userId = req.id
            const user = await userModel.findOne({ _id: userId })
            
            if (!user) {
                return res.status(404).json({ error: 'User not found' })
            }
            const friends = user.friends
            res.status(200).json(friends)
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Get friends list failed' })
        }
    },
    getRequests: async (req, res) => {
        try {
            const userId = req.id
            const user = await userModel.findOne({ _id: userId })
            
            if (!user) {
                return res.status(404).json({ error: 'User not found' })
            }
            const friendRequests = user.friendRequests
            res.status(200).json(friendRequests)
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Get requests list failed' })
        }
    },
    search: async(req, res) => {
        try {
            const { keyword } = req.body
            const users = 
            await userModel.find({ username: { $regex: keyword, $options: 'i' } },
            { _id: 1, username: 1, urlAvatar: 1, friends: 1, friendRequests: 1});
            res.status(200).json({users})
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Searching failed' })
        }
    }
}
