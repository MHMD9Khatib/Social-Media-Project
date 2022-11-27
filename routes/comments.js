const commentsRouter = require('express').Router();
const {
    addComment,
    allComments,
    getOneComment,
    addLike,
    removeLike,
    removeComment,
} = require('../controllers/index');

const { routProtector } = require('../middlewares/index');

commentsRouter.post('/create',routProtector, addComment);
commentsRouter.get('/all-comment', allComments);
commentsRouter.get('/get-comment/:id', routProtector, getOneComment);
commentsRouter.post('/likecomment', routProtector, addLike);
// commentsRouter.put('/likecomment', routProtector, addLike);

commentsRouter.delete('/removelike/:comment_id', routProtector, removeLike);
commentsRouter.delete('/delete/:id', routProtector, removeComment);

module.exports =  commentsRouter ;
