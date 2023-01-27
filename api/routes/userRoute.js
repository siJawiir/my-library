const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');

userRoute.get('/', UserController.getData)
userRoute.get('/user/:id', UserController.getDataBy)
userRoute.post('/', UserController.postData)
userRoute.put('/update/:id', UserController.putData)
userRoute.delete('/delete/:id', UserController.deleteData)




module.exports = userRoute;
