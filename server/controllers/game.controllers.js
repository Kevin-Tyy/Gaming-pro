const gameModel = require('../models/game.model')


const addGame = async (req , res) => {
    const { userId , username } = req.data
    // console.log(userId, username)
    const {gameDetails} = req.body;
    const { id , name , released , background_image , website , rating , developers  } = gameDetails

    const devArray = []
    developers.map((dev) => {
        devArray.push(dev.name) 
    })
    // console.log(name, released , background_image , website , rating , devArray  )
    try {
        const game = await gameModel.findOne({ gameName : name})
        if(!game){
            
            const newGame = new gameModel({
                gameId : id,
                username : username,
                userId : userId,
                website : website,
                gameName : name,
                gameImgUrl : background_image,
                gameRating : rating,
                releaseDate : released,
                developers : devArray
                
            })
            await newGame.save();
            res.send({ msg : 'Game addded successfully' , status : 'ok'});
        }
        else{
            res.send({ msg : 'Game already saved earlier, Cannot save a game twice' , status : 'warning'})
        }
    } catch (error) {
        res.send({ msg : 'Something went wrong, Check your internet connection or try again' , status : 'bad'});

    }

}
const removeGame = async (req, res) => {
    try {
      const { gameId } = req.body;
      console.log(gameId);
      
      const game = await gameModel.findOne({ gameId: gameId });
    
      const { _id } = game;
      
      await gameModel.findByIdAndDelete({ _id: _id });
      
      res.send({ msg: 'Game removed successfully', status: 'ok' });

    } catch (err) {
      console.error(err);
      res.send({ msg: 'Internal server error', status: 'bad' });
    }
  };
  
const fetchSavedGames = async  (req , res) => {
    const { userId, username } = req.data
    const games = await gameModel.find({ userId : userId });
    res.send({games : games , username : username})
}
module.exports = {
    addGame,
    removeGame,
    fetchSavedGames
}