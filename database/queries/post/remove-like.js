const connection = require('../../connection/index')

const decreaseLike = (id) => connection.query({
  text: 'UPDATE post SET like = like - 1 WHERE id = $1 RETURNING *;',
  values: [id],
});

module.exports = decreaseLike;
