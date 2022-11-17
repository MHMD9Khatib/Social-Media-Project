const connection = require('../../connection/index')

const insertComment = (data) => {
  const { content, post_id, user_id } = data;
  return connection.query({
    text: 'INSERT INTO comment ( content, post_id, user_id ) VALUES ($1, $2, $3)  RETURNING *;',
    values: [content, post_id, user_id],
  });
};

module.exports = insertComment;
