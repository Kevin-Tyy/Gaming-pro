const Joi = require('joi')

const registerValidationSchema = Joi.object({
    username: Joi.string().required().min(3).max(15).lowercase(),
    email: Joi.string().required().min(3).max(20).email().message("Enter a valid email address"),
    password: Joi.string().required().min(8).pattern(new RegExp('^(?=.*[!@#$%^&*])')).message("Password must contain atleast one special character")
});

const loginValidationSchema =Joi.object({
    username: Joi.string().required().min(3).max(25).lowercase(),
    password: Joi.string().required().min(8)
})

module.exports = {
    registerValidationSchema,
    loginValidationSchema
}

