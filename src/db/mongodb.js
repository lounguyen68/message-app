const mongoose = require('mongoose');

const connectString = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`

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