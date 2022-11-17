const connection = require('../../connection/index')

module.exports = async (userId) => {
    const { rows } = await connection.query(
      'SELECT id FROM user WHERE id = $1',
      [userId],
    );
    return rows[0];
  };