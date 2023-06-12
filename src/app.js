require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default : helmet} = require('helmet')
const morgan = require('morgan')
const cors = require('cors');

const app = express()

const router = require('./routes')

//init middleware
app.use(cors())
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
//init db
require('./db/mongodb')
//init routes
app.use('/v1/api',router)
//app.use('/',require('./routes'))

//handling error

module.exports = app