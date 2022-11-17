const commentsRouter = require('express').Router();
const {
    addComment,
    postComments,
    userComments,
    addLike,
    removeLike,
    removeComment,
} = require('../controllers/index');

const { routProtector } = require('../middlewares/index');

commentsRouter.post('/create',routProtector, addComment);
commentsRouter.post('/post', postComments);
commentsRouter.post('/user', routProtector, userComments);
commentsRouter.post('/add', routProtector, addLike);
commentsRouter.post('/remove', routProtector, removeLike);
commentsRouter.delete('/delete/:id', routProtector, removeComment);

module.exports =  commentsRouter ;
