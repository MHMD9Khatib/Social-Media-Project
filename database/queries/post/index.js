// const connection = require('../../connection');

// const insertPost = (data) => {
//   const {
//     title, content, community_name, user_id, content_type,
//   } = data;
  
//   return connection.query({
//     text: 'INSERT INTO posts (title,content,community_name,user_id,content_type) VALUES ($1, $2, $3, $4, $5)  RETURNING *;',
//     values: [title, content, community_name, user_id, content_type],
//   });
// };

// const getUserPosts = (id) => connection.query({
//   text: 'SELECT users.username, users.id as user_id, posts.id, posts.title,posts.like, posts.content,posts.community_name,posts.content_type, posts.post_date FROM users JOIN posts ON posts.user_id =users.id WHERE posts.user_id=$1;',
//   values: [id],
// });

// const getPosts = () => connection.query({
//   text: 'SELECT users.username, users.id as user_id, posts.id, posts.title,posts.like ,posts.content,posts.community_name,posts.content_type,posts.post_date FROM users JOIN posts ON posts.user_id =users.id ORDER BY vote DESC;',
// });

// const getRecentPosts = () => connection.query({
//   text: 'SELECT users.username,users.id as user_id, posts.id, posts.title, posts.content,posts.community_name,posts.content_type, posts.post_date FROM users JOIN posts ON posts.user_id =users.id ORDER BY posts.post_date DESC;',
// });

// const increaseLike = (id) => connection.query({
//   text: 'UPDATE post SET like = like + 1 WHERE id = $1 RETURNING *;',
//   values: [id],
// });

// const decreaseLike = (id) => connection.query({
//   text: 'UPDATE post SET like = like - 1 WHERE id = $1 RETURNING *;',
//   values: [id],
// });

// const deletePost = (id, uId) => connection.query({
//   text: 'DELETE FROM post WHERE id=$1 AND user_id=$2;',
//   values: [id, uId],
// });

// module.exports = {
//   insertPost,
//   getUserPosts,
//   getPosts,
//   getRecentPosts,
//   increaseLike,
//   decreaseLike,
//   deletePost,
// };

const addPost = require('./add-post');
const deletePost = require('./delete-post')
const getUserPosts = require('./get-post-by-id')
const getPosts = require('./get-post')
const insertLike = require('./insert-like')
const decreaseLike = require('./remove-like')

module.exports = {
  addPost,
  deletePost,
  getUserPosts,
  getPosts,
  insertLike,
  decreaseLike
}