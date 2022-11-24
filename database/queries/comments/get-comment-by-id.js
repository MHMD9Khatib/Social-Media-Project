const connection = require('../../connection/index')

const getCommentsById = (id) => connection.query({
    text: 'SELECT comments.* FROM comments WHERE comments.id = $1',
    values: [id],
  });

  module.exports = {getCommentsById};