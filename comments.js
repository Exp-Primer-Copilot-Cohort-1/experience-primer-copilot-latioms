// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const commeentController = require('../controllers/commentController');

// Create router
const commentRouter = express.Router();

// Configure router
commentRouter.use(bodyParser.json());

// Configure routes
commentRouter.route('/')
    .get(commeentController.getAllComments)
    .post(commeentController.postComment);

commentRouter.route('/:commentId')
    .get(commeentController.getCommentById)
    .put(commeentController.putCommentById)
    .delete(commeentController.deleteCommentById);

// Export module
module.exports = commentRouter;