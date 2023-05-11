const {cloudinary } = require('../utils/cloudinary')

const cloudUpload = async (uploadImage , next) => {
    try {

        next()
        return uploadedResponse;
    } catch (error) {
        console.log(error);
    }   

}

module.exports = cloudUpload;

