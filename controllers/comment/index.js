// const  addLike = require('./addLike')
// const  deleteComment = require('./deleteComment')
// const   getAllComments = require('./getAllComment')
// const  removeLike = require('./removeLike')
// const  getUserComment = require('./userComment')



const  {addComment} = require('./addComment');
const  allComments  = require('./getAllComment');
const  {getOneComment}  = require('./get-one-comment');
const  addLike  = require('./addLike');
const  removeLike  = require('./removeLike');
const  removeComment  = require('./deleteComment');



module.exports = {
    addComment,
    allComments,
    getOneComment,
    addLike,
    removeLike,
    removeComment,
}