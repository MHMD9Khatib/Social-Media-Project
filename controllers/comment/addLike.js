const {addLikeComment}  = require('../../database/queries/comments/add-like');

const addLike = async (req, res, next) => {
  try {
    const { user_id, comment_id } = req.body;
    const { id, likeComments } = await addLikeComment(user_id, comment_id);
    console.log(id, likeComments );

    return res.json({ message: 'Add like to comment successfully', id, likeComments });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};


module.exports = {addLike};