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
commentsRouter.put('/addlike', routProtector, addLike);
commentsRouter.put('/removelike', routProtector, removeLike);
commentsRouter.delete('/delete/:id', routProtector, removeComment);

module.exports =  commentsRouter ;
