const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  content: {
    type: String,
  },
  tag: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
