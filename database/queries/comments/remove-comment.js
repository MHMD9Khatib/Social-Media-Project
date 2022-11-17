const connection = require('../../connection/index')

const deleteComment = (id) => connection.query({
    text: 'DELETE FROM comment WHERE id=$1;',
    values: [id],
  });

  module.exports = deleteComment;