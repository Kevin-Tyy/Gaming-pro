const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const connect = require('./config/dbconfig');
const router = require('./routes/user.routes');
const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.use('/api' , router);


app.listen(PORT , ()=> {
    console.log(`server running on port ${PORT}`);
})