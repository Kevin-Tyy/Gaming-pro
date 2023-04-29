
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;


const connection = mongoose.connect(MONGO_URL)
    .then(()=> console.log("Connection successful"))
    .catch((error)=> console.log("Not connected", error))
                                        
    
module.exports = connection;