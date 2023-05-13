const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connect = require('./config/dbconfig');
const userRoute = require('./routes/user.routes');
const postRoute  = require('./routes/post.routes');
const gameRoute = require('./routes/game.routes')
const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json({ limit : '25mb'}))
app.use(cookieParser())
app.use(express.urlencoded({ limit : '25mb', extended : false}));
app.use('/user' , userRoute)
app.use('/post' , postRoute)
app.use('/game', gameRoute)

app.listen(PORT , ()=> {
    console.log(`server running on port ${PORT}`);
})