'use strict'
const mongoose = require('mongoose')
const messageModel = require('./message.model')
const DOCUMENT_NAME = 'Chat'
const COLLECTION_NAME = "Chats"

const chatSchema = new mongoose.Schema({
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        }
    ],
    messages: [messageModel.schema]
},{
    timestamps: true,
    collection: COLLECTION_NAME
})

const chatModel = new mongoose.model(DOCUMENT_NAME, chatSchema)
module.exports = chatModel