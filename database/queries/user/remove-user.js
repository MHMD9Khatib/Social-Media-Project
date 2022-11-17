const connection = require('../../connection');

module.exports = (userId) => connection.query(
    'DELETE FROM user WHERE id = $1',
    [userId],
  );