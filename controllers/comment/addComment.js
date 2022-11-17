const { commentValidation } = require('../../attachments/validations/comment');
const insertComment = require('../../database/queries/comments/add-comment');

const addComment = (req, res, next) => {
    commentValidation
      .validateAsync(req.body)
      .then((values) => insertComment(values))
      .then((result) => result.rows[0])
      .then((comment) => res.status(201).json({ msg: 'comment created', data: comment, status: 201 }))
      .catch(() => next());
  };

  module.exports = addComment;
