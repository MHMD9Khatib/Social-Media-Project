const connection = require('../../connection/index')

const getPosts = () => connection.query({
  text: 'SELECT user.username, user.id as user_id, posts.id, posts.title,posts.like ,posts.content,posts.community_name,posts.content_type,posts.post_date FROM users JOIN posts ON posts.user_id =users.id ORDER BY like DESC;',
});

module.exports = getPosts;
