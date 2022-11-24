const {decreaseLike} = require('../../database/queries/post/index');

const likeDown = (req, res, next) => {
    const { id } = req.body;
    decreaseLike(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: ' like down - 1 ', data, status: 200 }))
      .catch(() => next());
  };

module.exports = {likeDown};