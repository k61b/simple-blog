const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialPosts)
})

describe('When there is initially some posts saved', () => {
  test('posts are returned as json', async () => {
    await api
      .get('/api/posts')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

describe('When create a new post', () => {
  test('a valid post can be added', async () => {
    const newPost = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      content: 'Test Content from test api',
      tag: 'Test',
    }

    await api
      .post('/api/posts')
      .send(newPost)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const postsAtEnd = await helper.postsInDb()
    expect(postsAtEnd).toHaveLength(helper.initialPosts.length + 1)

    const title = postsAtEnd.map((item) => item.title)
    expect(title).toContain('Test Title')
  })
})

describe('When update a post', () => {
  test('a valid post can be updated', async () => {
    const postAtStart = await helper.postsInDb()
    const postToUpdate = postAtStart[0]

    const updatePost = {
      title: 'Update Test Title',
      subtitle: 'Update Test Subtitle',
      content: 'Test Content from test api',
      tag: 'Test',
    }

    await api
      .put(`/api/posts/${postToUpdate.id}`)
      .send(updatePost)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const postsAtEnd = await helper.postsInDb()
    const title = postsAtEnd.map((item) => item.title)
    expect(title).toContain('Update Test Title')
  })
})

describe('When delete a post', () => {
  test('a valid post can be deleted', async () => {
    const postAtStart = await helper.postsInDb()
    const postToDelete = postAtStart[0]

    await api.delete(`/api/posts/${postToDelete.id}`).expect(204)

    const postsAtEnd = await helper.postsInDb()

    expect(postsAtEnd).toHaveLength(helper.initialPosts.length - 1)
  })
})

afterAll(() => {
  mongoose.connection.close
})
