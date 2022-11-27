const deleteLikeComment  = require('../../database/queries/comments/remove-like');
const { getCommentsById }  = require('../../database/queries/comments/index')

const removeLike = async (req, res, next) => {
  try {
    // const { user_id, post_id } = req.body;
    const { comment_id } = req.params;
  const { user_id } = req.body;
  console.log(user_id, comment_id);
    if (Number(comment_id) > 0) {
      const likeComment = await getCommentsById(comment_id);
      console.log(likeComment);
      if (!likeComment) {
        return res.status(400).json({
          status: 400,
          message: 'comment not Exist in likes',
        });
      }
      await deleteLikeComment(user_id, comment_id);
      return res.json({ message: 'comment Deleted From likes Successfuly' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};


module.exports = removeLike;
