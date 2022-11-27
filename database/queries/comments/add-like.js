const connection = require('../../connection/index')

const addLikeComment = async (user_id, comment_id) => {
  const inserTolike = () => connection.query(
    `
  INSERT INTO likeComments 
  (user_id, comment_id)
  VALUES ($1, $2)`,
    [user_id, comment_id],
  );
  const { rows } = await connection.query(
    `
    UPDATE comments SET likee = likee +1 WHERE  comments.id = $1 RETURNING id,likee`,
    [comment_id],
  );
  inserTolike();
  return rows[0];
};


  module.exports = {addLikeComment};

