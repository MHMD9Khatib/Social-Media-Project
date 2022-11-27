const connection = require('../../connection/index')

const removeLikeComment = async (user_id, comment_id) => {
  await connection
    .query(`
    DELETE FROM likeComments 
    WHERE user_id = $1 
    AND comment_id = $2
    `, [user_id, comment_id]);

  await connection
    .query(`
    UPDATE comments
     SET likee = likee -1
     WHERE id = $1
    `, [comment_id]);
};


  module.exports = removeLikeComment;