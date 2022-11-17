const addComment = require('./add-comment');
const addLike = require('./add-like');
const getCommentId = require('./get-comment-by-id')
const getComment = require('./get-comment');
const removeComment = require('./remove-comment');
const removeLike = require('./remove-like');

module.exports = {
    addComment,
    addLike,
    getCommentId,
    getComment,
    removeComment,
    removeLike
}
