const connection = require('../../connection/index')

const addLikeComment = (id) => connection.query({
    text: 'UPDATE comments SET likee = likee + 1 WHERE id = $1 RETURNING *;',
    values: [id],
  });


  module.exports = addLikeComment;

