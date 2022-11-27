const connection = require('../../connection/index')

const insertPost = ({title, content, community_name, user_id, content_type}) =>  connection.query({
    text: 'INSERT INTO posts (title,content,community_name,user_id,content_type) VALUES ($1, $2, $3, $4, $5)  RETURNING *;',
    values: [title, content, community_name, user_id, content_type],
  });
  // "title": "title 1",
  // "content": "content 1",
  // "community_name": "community 1",
  // "user_id": 6,
  // "content_type": "type 1"

module.exports = {insertPost};