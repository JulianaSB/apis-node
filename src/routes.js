const { Router } = require('express')
const CommentController = require('./controllers/CommentController')
const routes = Router()

routes.get('/comments-list', CommentController.index)
routes.post('/comments-url', CommentController.store)
routes.put('/comments-edition', CommentController.update)
routes.delete('/comments-delete', CommentController.destroy)

module.exports = routes