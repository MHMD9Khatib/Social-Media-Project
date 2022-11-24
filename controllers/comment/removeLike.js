const deleteLikeComment  = require('../../database/queries/comments/remove-like');


const removeLike = (req, res, next) => {
    const { id } = req.body;
    deleteLikeComment(id)
      .then((result) => result.rows)
      .then((data) => res.status(200).json({ msg: ' like- 1 ', data, status: 200 }))
      .catch(() => next());
  };

module.exports = removeLike;
