const mongoose = require('mongoose');

const connectString = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@message-app.vnr6ru0.mongodb.net/?retryWrites=true&w=majority`

class Database {

    constructor(){
        this.connect()
    }

    connect(type = 'mongodb') {
        mongoose.connect(connectString)
        .then( () => {
            console.log('Connected Mongodb')
        })
        .catch( error => console.log('Error connect ' + error))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb