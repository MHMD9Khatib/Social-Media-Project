const connection = require('../../connection/index')

const insertPost = (title, content, community_name, user_id, content_type) =>  connection.query({
    text: 'INSERT INTO posts (title,content,community_name,user_id,content_type) VALUES ($1, $2, $3, $4, $5)  RETURNING *;',
    values: [title, content, community_name, user_id, content_type],
  });


module.exports = {insertPost};