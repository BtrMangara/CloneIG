const postController = require('../controller/postController');
const userController = require('../controller/userController');
const postRoute = require('express').Router();

postRoute.get('/',postController.getAllPost);
postRoute.get('/getPost',postController.getPost)
postRoute.get('/getPostUser',userController.token,postController.getPostUser);
postRoute.post('/addPost',userController.token,postController.addPost);
postRoute.delete('/deletePost/:id',postController.deletePost);
postRoute.get('/getDetailPost/:id',postController.getDetailPost);
postRoute.put('/updatePost/:id',postController.updatePost);
postRoute.put('/updateStatusPost/:id',postController.updateStatus);


module.exports= postRoute;