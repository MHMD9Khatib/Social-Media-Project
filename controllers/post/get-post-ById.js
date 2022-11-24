const {getUserPosts} = require('../../database/queries/post/index');


const getOnePost = async (req, res, next) => {
  try {
    const {id:postId} = req.params;

    console.log(postId,"postId");
    if (+postId > 0) {
      const post = await getUserPosts(postId);
      console.log(post);

        if (!post) {
          return res.status(404).json({
            message: 'post not found',
          });
        }
        if (post.approved === false) {
          return res.json({
            message: 'post is in the waiting list',
          });
        }
      return res.json({
        message: 'post found',
        data: post,
      });
    }
    return res.status(400).json({ message: 'Invalid post id' });
  } catch (err) {
    console.log(err);

    return next(err);
  }
};
module.exports = getOnePost;