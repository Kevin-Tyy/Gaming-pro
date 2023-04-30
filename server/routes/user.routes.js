const express = require('express');
const router = express.Router();

const {registerController, loginController, test} = require('../controllers/user.controller')
router.post('/register', registerController )
router.post('/login', loginController)
router.get('/test', test)


module.exports = router;