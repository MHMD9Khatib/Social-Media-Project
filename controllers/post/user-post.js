const getUserPosts = require('../../database/queries/post/index');


const userPosts = (req, res, next) => {
    const { id } = req.body;
    getUserPosts(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: 'all users posts', data, status: 200 }))
      .catch(() => next());
  };

  const userProfile = (req, res, next) => {
    const { id } = req.params;
    getUserPosts(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: 'all users posts', data, status: 200 }))
      .catch(() => next());
  };

module.exports = {userPosts , userProfile}