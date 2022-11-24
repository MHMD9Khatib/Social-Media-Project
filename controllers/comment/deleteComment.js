const {removeComment, getCommentsById}  = require('../../database/queries/comments/index');

const deleteComment = async (req, res, next) => {
  try {
    const { id:commentId } = req.params;

    const { user_id:userId } = req.body;
    console.log(userId,"userid");
    if (commentId > 0) {
      const comment = await getCommentsById(commentId);
      if (!comment) {
        return res.status(400).json({ message: 'comment Not Found' });
      }
      // if (comment.user_id !== userId) {
      //   console.log(comment.user_id);
      //   return res.status(403).json({
      //     message: 'You don\'t have permission to delete this comment',
      //   });
      // }
      await removeComment(commentId);
      return res.json({ message: 'comment Deleted Successfuly' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = deleteComment;
