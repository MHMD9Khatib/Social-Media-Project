
const logout = (req, res, next) => {
  try {
    res.clearCookie('token').json({ message: 'Logout from user success' });
  } catch (err) {
    console.log(err)
    return next(err);
  }
  };

  module.exports = logout;
