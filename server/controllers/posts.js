const Post = require('../models/posts')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

module.exports = {
    getPosts
}