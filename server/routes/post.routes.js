const express = require('express');
const router = express.Router();
const { createPost, fetchPosts, fetchUserPosts } = require('../controllers/posts.controllers')
const jwtAuth = require('../middlewares/jwtAuth')

router.post('/createpost', jwtAuth, createPost);
router.get('/getposts' , fetchPosts);
router.get('/fetchuserposts', jwtAuth , fetchUserPosts);
module.exports = router;