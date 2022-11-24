const postsRouter = require('express').Router();
const { routProtector } = require('../middlewares/index');

const {
    addPost,
    getOnePost,
    allPosts,
    likeUp,
    likeDown,
    postDelete,
} = require('../controllers/index');

postsRouter.get('/user-profile/:id', getOnePost);
postsRouter.get('/all-posts', allPosts);
postsRouter.post('/add-post', routProtector, addPost);
// postsRouter.post('/user-posts', routProtector, userPosts);
postsRouter.put('/like-up', routProtector, likeUp);
postsRouter.put('/like-down', routProtector, likeDown);
postsRouter.delete('/delete-post/:id', routProtector, postDelete);

module.exports = postsRouter;
