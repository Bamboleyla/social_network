const Router = require('express')
const router = new Router()
const postsController = require('../controllers/post.controller')

router.post('/post', postsController.createPost)
router.get('/post', postsController.getOnePostbyUser)
router.put('/post', postsController.updatePost)
router.delete('/post', postsController.deletePost)

module.exports = router