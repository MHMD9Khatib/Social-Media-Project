const connection = require('../../connection/index')

// const insertLike = (id) => connection.query({
//   text: 'UPDATE posts SET likee = likee + 1 WHERE id = $1 RETURNING *;',
//   values: [id],
// });


const insertLike = async (user_id, post_id) => {
  const inserTolike = () => connection.query(
    `
  INSERT INTO likee 
  (user_id, post_id)
  VALUES ($1, $2)`,
    [user_id, post_id],
  );
  const { rows } = await connection.query(
    `
  UPDATE posts SET likee = likee +1 WHERE  posts.id = $1 RETURNING id,likee`,
    [post_id],
  );
  inserTolike();
  return rows[0];
};


module.exports = insertLike;
