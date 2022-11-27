const { decreaseLike , getUserPosts} = require('../../database/queries/post/index');

// const likeDown = (req, res, next) => {
//     const { id } = req.body;
//     decreaseLike(id)
//       .then((result) => result.rows)
//       .then((data) => res.status(200).json({ msg: ' like down - 1 ', data, status: 200 }))
//       .catch(() => next());
//   };



  // const likeDown = async(req, res, next) => {
  //     try {
  //     const { user_id, post_id } = req.body;
  
  //     const { id, likee } = await decreaseLike(user_id, post_id);
  
  //     return res.json({ message: 'deleted like successfully', id, likee });
  //   } catch (error) {
  //     console.log(error);
  //     return next(error);
  //   }
  // };


  const likeDown = async (req, res, next) => {
    try {
      // const { user_id, post_id } = req.body;
      const { post_id } = req.params;
    const { user_id } = req.body;
    console.log(user_id, post_id);
      if (Number(post_id) > 0) {
        const likePost = await getUserPosts(post_id);
        console.log(likePost);
        if (!likePost) {
          return res.status(400).json({
            status: 400,
            message: 'post not Exist in likes',
          });
        }
        await decreaseLike(user_id, post_id);
        return res.json({ message: 'post Deleted From likes Successfuly' });
      }
      return res.status(400).json({ message: 'Bad Request' });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  };
  

module.exports = { likeDown };