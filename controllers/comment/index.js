// const  addLike = require('./addLike')
// const  deleteComment = require('./deleteComment')
// const   getAllComments = require('./getAllComment')
// const  removeLike = require('./removeLike')
// const  getUserComment = require('./userComment')



const  addComment = require('./addComment');
const  postComments  = require('./getAllComment');
const  userComments  = require('./userComment');
const  addLike  = require('./addLike');
const  removeLike  = require('./removeLike');
const  removeComment  = require('./deleteComment');



module.exports = {
    addComment,
    postComments,
    userComments,
    addLike,
    removeLike,
    removeComment,
}