const { getAllUsersQuery } = require('../../database/queries/user');

module.exports = async (req, res, next) => {
  try {
    const users = await getAllUsersQuery();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
};

