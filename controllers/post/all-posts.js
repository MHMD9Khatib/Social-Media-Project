const getPosts = require('../../database/queries/post/index');

const allPosts = (req, res, next) => {
    getPosts()
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: 'top posts like', data, status: 200 }))
      .catch(() => next());
  };

  module.exports = allPosts;