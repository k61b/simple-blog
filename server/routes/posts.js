const express = require('express')
const router = express.Router()
const { getPosts, createPost, getSinglePost, deletePost } = require('../controllers/posts')

router.get('/', getPosts)
router.get('/:id', getSinglePost)
router.post('/', createPost)
router.delete('/:id', deletePost)

module.exports = router