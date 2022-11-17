const connection = require('../../connection/index')

const getUserPosts = (id) => connection.query({
  text: 'SELECT users.username, users.id as user_id, posts.id, posts.title,posts.like, posts.content,posts.community_name,posts.content_type, posts.post_date FROM users JOIN posts ON posts.user_id =users.id WHERE posts.user_id=$1;',
  values: [id],
});

module.exports = getUserPosts;