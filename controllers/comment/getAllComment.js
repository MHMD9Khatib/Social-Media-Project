const getPostComments  = require('../../database/queries/comments/get-comment');


const postComments = (req, res, next) => {
    const { id } = req.body;
    getPostComments(id)
      .then((result) => result.rows)
      .then((comments) => res.status(200).json({ msg: 'all post comments', data: comments, status: 200 }))
      .catch(() => next());
  };


module.exports = postComments;