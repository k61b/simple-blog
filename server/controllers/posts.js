const Post = require('../models/posts')

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({
      message: err.message,
    })
  }
}

const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    res.status(200).json(post)
  } catch (err) {
    res.status(404).json({
      message: err.message,
    })
  }
}

const createPost = async (req, res) => {
  const newPost = new Post(req.body)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (err) {
    res.status(404).json({
      message: err.message,
    })
  }
}

const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body
  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true })
    res.json(updatedPost)
  } catch (err) {
    res.status(409).json({
      message: err.message,
    })
  }
}

const deletePost = async (req, res) => {
  const { id: _id } = req.params

  try {
    const deletedPost = await Post.findByIdAndRemove(_id)
    res.status(200).json(deletedPost)
  } catch (err) {
    res.status(409).json({
      message: err.message,
    })
  }
}

module.exports = {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
}
