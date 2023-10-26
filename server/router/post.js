const postController = require('../controller/postController');
const postRoute = require('express').Router();

postRoute.get('/',postController.getAllPost);
postRoute.post('/addPost',postController.addPost);
postRoute.delete('/deletePost/:id',postController.deletePost);
postRoute.get('/getDetailPost/:id',postController.getDetailPost);
postRoute.put('/updatePost/:id',postController.updatePost);
postRoute.put('/updateStatusPost/:id',postController.updateStatus);


module.exports= postRoute;