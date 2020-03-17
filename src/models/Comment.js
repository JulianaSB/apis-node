const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    author: String,
    status: String,
    comments: String,
    created: String,
})

module.exports = mongoose.model('Comment', CommentSchema)