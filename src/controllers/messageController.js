const messageModel = require('../models/message.model')
const chatModel = require('../models/chat.model')


module.exports = {
    //* Create a new message
    createMessage: async (req, res) => {
        try {
            const { chatId, senderId, content } = req.body
            if (req.id != senderId) {
                return res.status(404).json({ message: 'Invalid access'})
            }
            const chat = await chatModel.findOne({_id: chatId, users: senderId})
            if (!chat) {
                return res.status(404).json({ message: 'Chat not found'})
            }
            const newMessage = await messageModel.create({sender: senderId, content})
            if (!newMessage) {
                return res.status(404).json({ message: 'Can not send message' })
            }
            chat.messages.push(newMessage)
            await chat.save()
            res.status(200).json({ message: newMessage})
        } catch (error) {
            console.log(error)
            return res.status(404)
        }
    },
    //* Get messages
    getMessages: async (req, res) => {
        try {
            const chatId = req.params.chatId
            const userId = req.id
            const chat = await chatModel.findOne({_id: chatId, users: userId})
            if (!chat) {
                return res.status(404).json({ message: 'Chat not found'})
            }
            
            const allMessages = chat.messages
            res.status(200).json({ message: allMessages})
        } catch (error) {
            console.log(error)
            return res.status(404)
        }
    }
}

