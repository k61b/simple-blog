const Blog = require('../models/blog')

const initialPosts = [
  {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    content:
      'Of course, not at a sufficient level. So I will be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!',
    tag: 'Tech',
  },
  {
    title: 'Test Title 2',
    subtitle: 'Test Subtitle 2',
    content:
      'Of course, not at a sufficient level. So I will be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!',
    tag: 'Fun',
  },
]

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'Test Title',
    subtitle: 'Remove Id Test',
    content:
      'Of course, not at a sufficient level. So I will be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!',
    tag: 'Test',
  })

  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const postsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = {
  initialPosts,
  nonExistingId,
  postsInDb,
}
