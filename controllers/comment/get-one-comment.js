const {getCommentsById}  = require('../../database/queries/comments/get-comment-by-id');


const getOneComment = async (req, res, next) => {
  try {
    const {id:commentId} = req.params;

    console.log(commentId,"commentid");
    if (+commentId > 0) {
      const comment = await getCommentsById(commentId);
      console.log(comment);

        if (!comment) {
          return res.status(404).json({
            message: 'comment not found',
          });
        }
        if (comment.approved === false) {
          return res.json({
            message: 'comment is in the waiting list',
          });
        }
      return res.status(200).json({
        message: 'comment found',
        data:comment
      });
    }
    return res.status(400).json({ message: 'Invalid comment id' });
  } catch (err) {
    console.log(err);

    return next(err);
  }
};

module.exports = {getOneComment};