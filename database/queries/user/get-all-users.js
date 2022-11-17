const connection = require('../../connection/index')

module.exports = async () => {
    const { rows } = await connection.query('SELECT * FROM user');
    return rows;
  };
