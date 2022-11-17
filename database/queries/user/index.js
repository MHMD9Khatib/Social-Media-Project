// const getUser = require('./get-all-users')
// const getUserById = require('./get-user-by-id')
const checkAccount = require('./check-account')
const { addUser, getUserByEmail } = require('./add-user');
const addNewUser = require('./add-new-user');
// const removeUser = require('./remove-user')
// const updateData = "UPDATE user SET name = $1 WHERE id = $2" ;

module.exports = {
    // getUser,
    // getUserById,
    checkAccount,
    addUser,
    getUserByEmail,
    addNewUser,
    // removeUser,
}

