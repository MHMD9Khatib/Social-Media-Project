// const jwt = require('jsonwebtoken');
// const { myError } = require('../controllers/errors');
const {verifyToken} = require('../sign-token/index')

const {
  env: { SECRET_KEY },
} = process;


const routProtector = async(req, res, next) => {
  try {
    const { headers: { token } } = req;
    console.log(token, "token");
    if (token) {
      const value = await verifyToken(token, SECRET_KEY);
      console.log(value, "value");
      req.user_id = value.user_id;
      next();
    } else {
      res.status(401).json({ message: 'error 401' });
    }
  } catch (err) {
    console.log(err);
    if (err.message.includes('invalid')) {
      res.status(401).json({ message: '1012' });
    } else {

      next(err);
    }
  }
};
module.exports = { routProtector };
