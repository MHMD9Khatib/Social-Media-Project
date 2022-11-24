const addPost = require('./add-post')
const getOnePost = require('./get-post-ById');
const allPosts = require('./all-posts')
const {likeUp} = require('./add-like')
const {likeDown} = require('./remove-like')
const {postDelete} = require('./delete-post')


module.exports = {
  addPost,
  getOnePost,
  allPosts,
  likeUp,
  likeDown,
  postDelete,
};
