const connection = require('../../connection/index')

const insertComment = (data) => {
  const { content, user_id , post_id} = data;
  return connection.query({
    text: 'INSERT INTO comments ( content, user_id , post_id) VALUES ($1, $2, $3)  RETURNING *;',
    values: [content, user_id, post_id],
  });
};

module.exports = {insertComment};
