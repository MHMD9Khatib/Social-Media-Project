const connection = require('../../connection/index')

const removeLikeComment = (id) => connection.query({
    text: 'UPDATE comment SET liks = liks - 1 WHERE id = $1;',
    values: [id],
  });

  module.exports = removeLikeComment;