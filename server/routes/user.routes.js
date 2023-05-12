const express = require('express');
const userRouter = express.Router();
const {registerController, loginController, protectedroute , getUserInfo , fetchUsers, updateProfile} = require('../controllers/user.controller')
const jwtAuth = require('../middlewares/jwtAuth')

userRouter.post('/register', registerController )
userRouter.post('/login', loginController)
userRouter.post('/protectedroute' , jwtAuth, protectedroute);
userRouter.get('/getuser',jwtAuth , getUserInfo);
userRouter.get('/fetchUsers', fetchUsers)
userRouter.put('/updateprofile' , jwtAuth , updateProfile);
module.exports = userRouter;