const increaseLikeComment  = require('../../database/queries/comments/add-like');

const addLike = (req, res, next) => {
    const { id } = req.body;
    increaseLikeComment(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: ' like up + 1 ', data, status: 200 }))
      .catch(() => next());
  };


module.exports = addLike;