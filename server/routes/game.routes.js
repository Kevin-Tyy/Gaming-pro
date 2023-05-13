const express = require('express');
const gameRouter = express.Router()
const { addGame , removeGame , fetchSavedGames} = require('../controllers/game.controllers');
const jwtAuth = require('../middlewares/jwtAuth');

gameRouter.post('/addgame' , jwtAuth, addGame)
gameRouter.post('/removegame' , jwtAuth , removeGame)
gameRouter.get('/fetchsavedgames' , jwtAuth , fetchSavedGames)


module.exports = gameRouter;