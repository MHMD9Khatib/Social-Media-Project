const connection = require('../../connection/index')

const getUserPosts = async (id) => {
  const { rows } = await connection.query(
    `

      SELECT posts.*,users.name AS user_name
      FROM posts INNER JOIN users
      ON posts.user_id = users.id 
      WHERE posts.id = $1
    `,
    [id],
  );
  return rows[0];
};

module.exports = {getUserPosts};