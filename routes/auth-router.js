const authRouter = require('express').Router();
const { 
    login,
    signUp,
    logout 
    } = require('../controllers/authentication/index');

authRouter.post('/signup', signUp);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

module.exports =  authRouter;
