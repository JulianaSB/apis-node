const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://julianasimoes:juliana7@cluster0-52jxp.mongodb.net/apisNode?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get post put delete
app.use(express.json())
app.use(routes)
app.listen(3333)