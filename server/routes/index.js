const { Router } = require('express')
const userRoute = require('./user.routes')
const gameRoute = require('./game.routes')
const postRoute = require('./post.routes')
const router = Router()

router.use('/user' , userRoute)
router.use('/post' , postRoute)
router.use('/game', gameRoute)

module.exports = router