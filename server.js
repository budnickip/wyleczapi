require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3008
var cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', (error)=> console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())

const subscribersRouter = require('./routes/subscribers')
const itemsRouter = require('./routes/items')
app.use('/subscribers', subscribersRouter)
app.use('/items', itemsRouter)
app.listen(port, () => console.log('server started'))