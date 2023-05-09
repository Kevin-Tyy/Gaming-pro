const express = require('express');
const router = express.Router();
const {registerController, loginController, protectedroute , findUser , fetchUser} = require('../controllers/user.controller')
const jwtAuth = require('../middlewares/jwtAuth')

router.post('/register', registerController )
router.post('/login', loginController)
router.post('/protectedroute' , jwtAuth, protectedroute);
router.get('/findUser',jwtAuth , findUser);
router.get('/fetchUsers', fetchUser)

module.exports = router;