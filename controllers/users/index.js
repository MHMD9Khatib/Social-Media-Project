const getUsers = require('./get-all-users');
const deleteUser = require('./delete-user');
const getUserById = require('./get-user-byId');


module.exports = {
  getUsers,
  getUserById,
  deleteUser,
};
