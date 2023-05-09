const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postText : {
        type : String,
        required : true,
    },
    postImage : {
        type : String,
        trim: true,
    },
    creatorId : {
        type : String,
        trim: true,
        required : true
    },
    creatorImgUrl : {
        type : String,
        trim: true,   
    },
    creatorName : {
        type : String,
        required : true,
        trim: true,
    }  

}, {timestamps : true});

const PostModel = mongoose.model('Posts' , postSchema);
module.exports = PostModel;