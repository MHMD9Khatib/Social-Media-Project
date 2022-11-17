const connection = require('../../connection/index')

const addUser = (data) => {
    const { username, email, password } = data;
    return connection.query({
      text: 'INSERT INTO user (username,email, password) VALUES ($1, $2, $3) RETURNING *; ',
      values: [username, email, password],
    });
  };


const getUserByEmail = (email) => connection.query({
    text: 'SELECT * FROM user WHERE email=$1;',
    values: [email],
});

module.exports = { addUser, getUserByEmail };
