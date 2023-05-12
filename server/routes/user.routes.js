const express = require('express');
const router = express.Router();
const {registerController, loginController, protectedroute , getUserInfo , fetchUsers, createPost, fetchPosts, updateProfile, fetchUserPosts } = require('../controllers/user.controller')
const jwtAuth = require('../middlewares/jwtAuth')

router.post('/register', registerController )
router.post('/login', loginController)
router.post('/protectedroute' , jwtAuth, protectedroute);
router.get('/getuser',jwtAuth , getUserInfo);
router.get('/fetchUsers', fetchUsers)
router.post('/createpost', jwtAuth, createPost);
router.get('/getposts' , fetchPosts);
router.put('/updateprofile' , jwtAuth , updateProfile);
router.get('/fetchuserposts', jwtAuth , fetchUserPosts);
module.exports = router;