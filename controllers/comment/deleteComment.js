const deleteComment  = require('../../database/queries/comments/remove-comment');

const removeComment = (req, res, next) => {
  const { id } = req.body;
  deleteComment(id)
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'deleted', data, status: 200 }))
    .catch(() => next());
};

module.exports = removeComment;
