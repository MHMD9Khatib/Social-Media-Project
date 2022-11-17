const connection = require('../../connection/index')

const addLikeComment = (id) => connection.query({
    text: 'UPDATE comment SET like = like + 1 WHERE id = $1;',
    values: [id],
  });


  module.exports = addLikeComment;

