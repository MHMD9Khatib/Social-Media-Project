const connection = require('../../connection/index')

const getUserPosts = async (id) => {
  const { rows } = await connection.query(
    `

      SELECT posts.* FROM posts WHERE posts.id = $1
    `,
    [id],
  );
  return rows[0];
};

module.exports = {getUserPosts};