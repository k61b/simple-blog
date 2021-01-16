const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        String,
    },
    subtitle: {
        String,
    },
    content: {
        String,
    },
    tag: {
        String,
    },
    image: {
        String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post