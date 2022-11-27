const connection = require('../../connection/index')

// const decreaseLike = (id) => connection.query({
//   text: 'UPDATE posts SET likee = likee - 1 WHERE id = $1 RETURNING *;',
//   values: [id],
// });
// DELETE FROM posts WHERE id=$1 ;

// const decreaseLike = async (user_id, post_id) => {
//   const deslike = () => connection.query(
//     `
//     DELETE FROM likee WHERE id=$1`,
//     [user_id],
//   );
//   const { rows } = await connection.query(
//     `
//     UPDATE posts SET likee = likee -1 WHERE id = $1 RETURNING *;`,
//     [post_id],
//   );
//   deslike();
//   return rows[0];
// };


const decreaseLike = async (user_id, post_id) => {
  await connection
    .query(`
    DELETE FROM likee 
    WHERE user_id = $1 
    AND post_id = $2
    `, [user_id, post_id]);

  await connection
    .query(`
    UPDATE posts
     SET likee = likee -1
     WHERE id = $1
    `, [post_id]);
};



module.exports = { decreaseLike };
