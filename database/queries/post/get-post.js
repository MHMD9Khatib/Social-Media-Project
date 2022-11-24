const connection = require('../../connection/index')

const getAllPosts = () => connection.query({
  text: 'SELECT * FROM posts',
});

module.exports = {getAllPosts};
