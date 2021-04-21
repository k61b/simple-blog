const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Blog', blogSchema)
