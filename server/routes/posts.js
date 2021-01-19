const express = require('express')
const router = express.Router()
const { getPosts, createPost, getSinglePost } = require('../controllers/posts')

router.get('/', getPosts)
router.get('/:id', getSinglePost)
router.post('/', createPost)

module.exports = router