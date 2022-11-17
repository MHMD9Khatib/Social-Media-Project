const connection = require('../../connection/index')

const insertLike = (id) => connection.query({
  text: 'UPDATE post SET like = like + 1 WHERE id = $1 RETURNING *;',
  values: [id],
});

module.exports = insertLike;
