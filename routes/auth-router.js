const authRouter = require('express').Router();
const { 
    login,
    signUp,
    logout 
    } = require('../controllers/authentication/index');

const setCookie = require("../middlewares/cookie")

authRouter.post('/signup', signUp , setCookie);
authRouter.post('/login', login , setCookie);
authRouter.get('/logout', logout);

module.exports =  authRouter;
