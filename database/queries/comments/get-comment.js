const connection = require('../../connection/index')

const getAllComments = () => connection.query({
    text: 'SELECT * FROM comments',
  });

  module.exports = getAllComments