const postsRouter = require('express').Router();
const { routProtector } = require('../middlewares/index');

const {
    addPost,
    userPosts,
    userProfile,
    allPosts,
    likeUp,
    likeDown,
    postDelete,
} = require('../controllers/index');

postsRouter.get('/user-profile/:id', userProfile);
postsRouter.get('/all-posts', allPosts);
postsRouter.post('/add-post', routProtector, addPost);
postsRouter.post('/user-posts', routProtector, userPosts);
postsRouter.put('/like-up', routProtector, likeUp);
postsRouter.put('/like-down', routProtector, likeDown);
postsRouter.post('/delete-post', routProtector, postDelete);

module.exports = postsRouter;
