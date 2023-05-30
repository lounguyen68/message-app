'use strict'
const mongoose = require('mongoose'); // Erase if already required
const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = "Users"

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required: true,
        maxLength:20
    },
    email:{
        type:String,
        trim:true,
        required: true,
        unique:true,
        lowercase: true
    },
    urlAvatar:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength: 7
    },
    friendRequests: [
        {
          sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DOCUMENT_NAME,
          }
        }
      ],
    friends: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: DOCUMENT_NAME,
        }
      ],
    refreshToken:{
        type:String
    }
},{
    timestamp:true,
    collection: COLLECTION_NAME
});



//Export the model
const userModel = mongoose.model(DOCUMENT_NAME, userSchema)
module.exports = userModel