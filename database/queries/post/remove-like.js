const connection = require('../../connection/index')

const decreaseLike = (id) => connection.query({
  text: 'UPDATE posts SET likee = likee - 1 WHERE id = $1 RETURNING *;',
  values: [id],
});

module.exports = {decreaseLike};
