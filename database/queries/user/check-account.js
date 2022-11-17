const connection = require('../../connection/index')

module.exports = async (email) => {
    const { rows } = await connection
      .query(
        'SELECT * FROM user WHERE email= $1 ;',
        [email],
      );
  
    return rows[0];
  };