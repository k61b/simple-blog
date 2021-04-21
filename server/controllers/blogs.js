const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  try {
    const blogs = await Blog.find()

    response.status(200).json(blogs)
  } catch (error) {
    response.status(404).json({
      message: error.message,
    })
  }
})

blogsRouter.get('/:id', async (request, response) => {
  try {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    response.status(404).json({
      message: error.message,
    })
  }
})

blogsRouter.post('/', async (request, response) => {
  const newBlog = new Blog(request.body)
  try {
    await newBlog.save()
    response.status(201).json(newBlog)
  } catch (error) {
    response.status(404).json({
      message: error.message,
    })
  }
})

blogsRouter.put('/:id', async (request, response) => {
  const { id: _id } = request.params
  const blog = request.body
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(_id, blog, { new: true })
    response.json(updatedBlog)
  } catch (error) {
    response.status(404).json({
      message: error.message,
    })
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  const { id: _id } = request.params

  try {
    const deletedBlog = await Blog.findByIdAndRemove(_id)
    response.status(200).json(deletedBlog)
  } catch (error) {
    response.status(404).json({
      message: error.message,
    })
  }
})

module.exports = blogsRouter
