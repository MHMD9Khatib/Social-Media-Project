const { commentValidation } = require('../../attachments/validations/comment');
const {insertComment} = require('../../database/queries/comments/index');

const addComment = (req, res, next) => {
  console.log(req.body);
    commentValidation
      .validateAsync(req.body)
      .then(() => insertComment(req.body))
      .then(() => res.status(201).json({ msg: 'comment created',status: 201 }))
      .catch((error) => {
        console.log(error);
        return next()
      });

  };

  module.exports = {addComment};
