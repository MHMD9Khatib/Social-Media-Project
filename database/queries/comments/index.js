const {insertComment} = require('./add-comment');
const addLike = require('./add-like');
const {getCommentsById} = require('./get-comment-by-id')
const getAllComments = require('./get-comment');
const removeComment = require('./remove-comment');
const removeLike = require('./remove-like');

module.exports = {
    insertComment,
    addLike,
    getCommentsById,
    getAllComments,
    removeComment,
    removeLike
}
