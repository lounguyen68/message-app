const chatModel = require('../models/chat.model')
const userModel = require('../models/user.model')


//* Create a new chat
const createChat = async (firstId, secondId) => {
    let chat = await chatModel.findOne({
        users: {
          $all: [
            firstId,
            secondId
          ]
        }
      }).lean();
    if (!chat) {
        chat = new chatModel({
            users: [firstId, secondId],
            messages: []
        })
        await chat.save()
    }
    return chat
}

//* Get a chat
const findChat= async (id, chatId) => {
    try {
        const chat = await chatModel.findOne({_id: chatId, users: id})
        return chat
    } catch (error) {
        console.error(error)
        return res.status(404)
    }
}

//* Update user's Chat List
const updateChatList = async (id, chatId) => {
    const user = await userModel.findOne({_id: id})
    user.chats.push(chatId)
    await user.save()
    return user
}
module.exports = {
    get: async (req, res) => {
        const chatId = req.params.chatId
        const id = req.id
        try {
            const chat = await findChat(id ,chatId)
            if (!chat) {
                return res.status(404).json({message: 'Chat not found'})
            }
            res.status(200).json({chat})
        } catch (error) {
            console.log(error)
            return res.status(404).json({message: 'Failed to get chat box'})
        }
    },
    create: async (req, res) => {
        const { firstId, secondId } = req.body
        if ((req.id != firstId) && (req.id != secondId)) {
            return res.status(404).json({message: 'Invalid access'})
        }
        try {
            const chat = await createChat(firstId, secondId)
            if (!chat) {
                return res.status(404).json({message: 'Can not create chat'})
            }
            await updateChatList(firstId, chat._id)
            await updateChatList(secondId, chat._id)
            res.status(201).json({chat})
        } catch (error) {
            console.log(error)
            return res.status(404).json({message: 'Failed to create chat box'})
        }
    },
    getChats: async (req, res) => {
        const userId = req.id
        try {
            const chats = await chatModel.find({ users: userId })
                            .select('_id users')
                            .exec();
            if (!chats) {
                return res.status(404).json({ error: 'Chats not found' })
            }
            res.status(200).json(chats);
        } catch (error) {
            console.log(error)
            return res.status(404).json({message: 'Failed to get chats'})
        }
    }
}