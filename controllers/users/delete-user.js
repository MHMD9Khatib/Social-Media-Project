const { findUser, removeUser } = require('../../database/queries/user');



module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (Number(userId) > 0) {
      const user = await findUser(userId);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      await removeUser(userId);
      return res.json({ message: 'User deleted' });
    }
    return res.status(400).json({
      message: 'Request status 400',
    });
  } catch (error) {
    return next(error);
  }
};