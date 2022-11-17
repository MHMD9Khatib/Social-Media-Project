// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const getUserByEmail = require('../../database/queries/user/index');
const loginValidation = require('../../attachments/validations/login');
// const myError = require('../errors/costm-error');
const  checkAccount  = require('../../database/queries/user/index');
const { comparePasswords } = require('../../b-crypt/index');


const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginValidation.validateAsync(req.body);
    const user = await checkAccount(email);
    if (!user) {
      return res.status(401).json({ error: { message: '1008' } });
    }
    const compared = await comparePasswords(password, user.password);
    if (!compared) {
      return res.status(401).json({ error: { message: '1008' } });
    }
    req.userId = user.id;
    return next();
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
}

module.exports = login;
