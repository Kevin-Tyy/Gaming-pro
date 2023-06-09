const Joi = require('joi')

const registerValidationSchema = Joi.object({
    username: Joi.string().required().min(3).max(15).lowercase(),
    email: Joi.string().required().min(5).max(50).email().message("Enter a valid email address"),
    password: Joi.string().required().min(8).pattern(new RegExp('^(?=.*[!@#$%^&*])')).message("Password must contain atleast one special character"),
    uploadImage : Joi.string().allow("")
});

const loginValidationSchema =Joi.object({
    username: Joi.string().required().min(3).max(15).lowercase(),
    password: Joi.string().required()
})

module.exports = {
    registerValidationSchema,
    loginValidationSchema
}
