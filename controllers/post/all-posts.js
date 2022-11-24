const {getAllPosts} = require('../../database/queries/post/index');

const allPosts = async (req, res, next) => {
  try {
    getAllPosts()
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'top posts like', data, status: 200 }))

  } catch (err) {
    console.log(err);
    return next(err);
  }
};
// (req, res, next) => {
  // getAllPosts()
  //     .then((result) => result.rows)
  //     .then((data) => res.status(200).json({ msg: 'top posts like', data, status: 200 }))
//       .catch(() => next());
//   };

  module.exports = allPosts;