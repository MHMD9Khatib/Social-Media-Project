const getUserComments  = require('../../database/queries/comments/get-comment-by-id');


const userComments = (req, res, next) => {
    const { id } = req.body;
    getUserComments(id)
      .then((result) => result.rows)
      .then((comments) => res.status(200).json({ msg: 'all post comments', data: comments, status: 200 }))
      .catch(() => next());
  };

module.exports = userComments;