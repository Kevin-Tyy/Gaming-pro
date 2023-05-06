const express = require('express');
const router = express.Router();
const {registerController, loginController, test, protectedroute, uploadController} = require('../controllers/user.controller')
const jwtAuth = require('../middlewares/jwtAuth')

router.post('/register', registerController )
router.post('/login', loginController)
router.get('/test', test)
router.post('/protectedroute' , jwtAuth, protectedroute);
router.post('/upload', uploadController)


module.exports = router;