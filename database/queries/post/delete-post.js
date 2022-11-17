const connection = require('../../connection');

const deletePost = (id, uId) => connection.query({
  text: 'DELETE FROM posts WHERE id=$1 AND user_id=$2;',
  values: [id, uId],
});

module.exports = deletePost;