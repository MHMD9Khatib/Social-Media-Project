const  signToken = require('../sign-token/index');

const {
  env: { SECRET_KEY },
} = process;

const setCookie = async (req, res, next) => {
  try {
    const { SECRET_KEY } = process.env;
    const { userId } = req;

    const token = await signToken({ userId }, SECRET_KEY);

    return res
      .cookie('token', token, { httpOnly: true, secure: true })
      .status(201)
      .json({ message: '1010' });
  } catch (err) {
    return next(err);
  }
};

module.exports = setCookie;
