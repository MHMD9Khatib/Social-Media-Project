const getAllComments  = require('../../database/queries/comments/get-comment');


const allComments = async (req, res, next) => {
  try {
    getAllComments()
    .then((result) => result.rows)
    .then((data) => res.status(200).json({ msg: 'all comments', data, status: 200 }))

  } catch (err) {
    console.log(err);
    return next(err);
  }
};


module.exports = allComments;