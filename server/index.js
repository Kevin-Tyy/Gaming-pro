const express = require('express');
const dotenv = require('dotenv').config();
const connect = require('./config/dbconfig');
const router = require('./routes/user.routes');
const app = express();
const PORT = process.env.PORT

app.use('/api' , router);


app.listen(PORT , ()=> {
    console.log(`server running on port ${PORT}`);
})