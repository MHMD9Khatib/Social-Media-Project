const { deletePost , getUserPosts } = require('../../database/queries/post/index');

const postDelete = async (req, res, next) => {
  try {
    const { id:postId } = req.params;
    const { user_id:userId } = req.body;
    console.log(userId,"userid");
    if (postId > 0) {
      const post = await getUserPosts(postId);
      if (!post) {
        return res.status(400).json({ message: 'post Not Found' });
      }
      
      if (post.user_id !== userId) {
        return res.status(403).json({
          message: 'You don\'t have permission to delete this post',
        });
      }
      await deletePost(postId);
      return res.json({ message: 'post Deleted Successfuly' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};


  module.exports = {postDelete};