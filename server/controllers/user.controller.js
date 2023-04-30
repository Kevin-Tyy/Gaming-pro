const { registerValidationSchema } = require("../validation/validationSchema");

const loginController = (req, res) => {
    const { error } = loginController.validate(req.body)
    if(error) {
        return res.status(404).send(error.message)
    }
  
    res.send('login successful')
}

const registerController = (req, res) => {
    const {error} = registerValidationSchema.validate(req.body)
    if (error) {
        return res.status(400).send(error.message);
    }

    res.send('Signup successful');
}

const test = (req, res) => {
    res.send("Test successful");
}
module.exports = {
    loginController,
    registerController,
    test
}