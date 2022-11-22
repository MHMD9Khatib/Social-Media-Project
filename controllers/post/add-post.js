const { addPostValidation } = require('../../attachments/validations/post');
const insertPost = require('../../database/queries/post/index');

const addPost = (req, res, next) => {
    addPostValidation
      .validateAsync(req.body)
      .then(() => insertPost(req.body))
      .then(() => res.status(201).json({ msg: 'post created', status: 201 }))
      .catch((error) => {
        console.log(error);
        if (error.name === 'ValidationError') {
          res.status(400).json({ msg: error.message, status: 400 });
        } else {
          next();
        }
      });
  };

module.exports = addPost;