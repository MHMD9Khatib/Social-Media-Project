const {insertLike} = require('../../database/queries/post/index');

const likeUp = (req, res, next) => {
    const { id } = req.body;
    insertLike(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: ' like up + 1 ', data, status: 200 }))
      .catch(() => next());
  };

  module.exports = {likeUp};