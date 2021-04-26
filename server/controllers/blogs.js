const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find()

  response.status(200).json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

blogsRouter.post('/', async (request, response) => {
  const newBlog = new Blog(request.body)
  await newBlog.save()
  response.status(201).json(newBlog)
})

blogsRouter.put('/:id', async (request, response) => {
  const { id: _id } = request.params
  const blog = request.body
  const updatedBlog = await Blog.findByIdAndUpdate(_id, blog, { new: true })
  response.json(updatedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  const { id: _id } = request.params

  const deletedBlog = await Blog.findByIdAndRemove(_id)
  response.status(204).json(deletedBlog)
})

module.exports = blogsRouter
