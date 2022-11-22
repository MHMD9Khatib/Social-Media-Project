// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const getUserByEmail = require('../../database/queries/user/index');
const loginValidation = require('../../attachments/validations/login');
// const myError = require('../errors/costm-error');
const checkAccount  = require('../../database/queries/user/check-account');
const { comparePasswords } = require('../../b-crypt/index');
const {signToken} = require('../../sign-token/index')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginValidation.validateAsync(req.body);
    const user = await checkAccount(email);
    console.log(user , "user");
    console.log(email , "email");
    if (!user) {
      return res.status(401).json({ error: { message: 'Wrong user!' } });
    }

    const compared = await comparePasswords(password, user.password);
    console.log(user.password , "password");

    if (!compared) {
      return res.status(401).json({ error: { message: 'Wrong password! ' } });

    }

    req.userId = user.id;
    // return res;
    const {SECRET_KEY}  = process.env;
    // const { userId } = req;
    // return res.json({m:"login success"});
    const {password:pass,...rest}= user;

    const token = await signToken(user.id.toString() , SECRET_KEY);
    console.log('fathi',token);
    return res.json({...rest  ,token})
    // return res
    // .cookie('token', token, { httpOnly: true, secure: true })
    // .status(200)
    // .json({ message: '1010' });

  } catch (err) {
    
    console.log(err)
    if (err.details) {
      err.status = 400;
    }
  }
}



module.exports = login;
