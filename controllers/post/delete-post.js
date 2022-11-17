const deletePost = require('../../database/queries/post/index');

const postDelete = (req, res, next) => {
    const { id } = req.body;
    deletePost(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: 'deleted', data, status: 200 }))
      .catch(() => next());
  };

  module.exports = postDelete;