const { insertLike } = require('../../database/queries/post/index');

// const likeUp = (req, res, next) => {
//     const { id } = req.body;
//     insertLike(id)
//       .then((result) => result.rows)
//       .then((data) => res.status(200).json({ msg: ' like up + 1 ', data, status: 200 }))
//       .catch(() => next());
//   };

  const likeUp = async (req, res, next) => {
    try {
      const { user_id, post_id } = req.body;
  
      const { id, likee } = await insertLike(user_id, post_id);
  
      return res.json({ message: 'Added to like successfully', id, likee });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };

  module.exports = { likeUp };