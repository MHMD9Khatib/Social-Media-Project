const connection = require('../../connection/index')

const deleteComment = (id) => connection.query({
    text: 'DELETE FROM comments WHERE id=$1;',
    values: [id],
  });

  module.exports = deleteComment;