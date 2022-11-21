// const jwt = require('jsonwebtoken');
// const {addUser , getUserByEmail} = require('../../database/queries/user/index');
const signUpValidation = require('../../attachments/validations/signup');
// const myError = require('../errors/costm-error');
const { checkAccount, addNewUser } = require('../../database/queries/user/index');

const signUp = async (req, res, next) => {
  try {
    await signUpValidation.validateAsync(req.body);
    const user = await checkAccount(req.body.email);
    if (user) {
      return res
        .status(403)
        .json({ error: { message: 'error user' } });
    }
    const newUser = await addNewUser(req.body);
    req.userId = newUser.id;
    
    console.log(newUser);
    return res
    .status(200)
    .json({ error: { message: 'user create sucscc' } });
  } catch (error) {
    console.log(error);
    if (error.details) {
      error.status = 400;
    }
    return next(error);
  }
  };

  module.exports = signUp;
