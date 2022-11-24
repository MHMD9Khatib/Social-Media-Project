const { addPostValidation } = require('../../attachments/validations/post');
const {insertPost} = require('../../database/queries/post/index');

const addPost = (req, res, next) => {
  console.log(req.body);
    addPostValidation
      .validateAsync(req.body)
      .then(() => insertPost(req.body))
      .then(() => res.status(201).json({ msg: 'post created', status: 201 }))
      .catch((error) => {
        console.log(error);
        return next()
      });
  };

module.exports = addPost;