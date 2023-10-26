const userController = require('../controller/userController')
const userRoute = require('express').Router();

userRoute.get('/',userController.getUser);
userRoute.post('/register',userController.register);
userRoute.post('/login',userController.login);
userRoute.get('/getDetailAccount/:id',userController.getDetailUser);
userRoute.put('/updateAccount/:id',userController.updateUser);
userRoute.delete('/deleteAccount/:id',userController.deleteUser);


module.exports = userRoute;