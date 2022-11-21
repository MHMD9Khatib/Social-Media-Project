const connection = require('../../connection/index')

module.exports = async (email) => {
  console.log(email);
    const { rows } = await connection
      .query(
        'SELECT * FROM users WHERE email= $1 ;',
        [email],
      );
  
    return rows[0];
  };