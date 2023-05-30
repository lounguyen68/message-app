'use strict'

const mongoose = require('mongoose')
const DOCUMENT_NAME = 'Message'
const COLLECTION_NAME = "Messages"

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
      },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true,
    }
},{
    timestamp:true,
    collection: COLLECTION_NAME
})

const messageModel = mongoose.model(DOCUMENT_NAME, messageSchema)
module.exports = messageModel

