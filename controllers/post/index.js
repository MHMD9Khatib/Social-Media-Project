const addPost = require('./add-post')
const {userPosts , userProfile} = require('./user-post');
const allPosts = require('./all-posts')
const likeUp = require('./add-like')
const likeDown = require('./remove-like')
const postDelete = require('./delete-post')


module.exports = {
  addPost,
  userPosts,
  userProfile,
  allPosts,
  likeUp,
  likeDown,
  postDelete,
};
