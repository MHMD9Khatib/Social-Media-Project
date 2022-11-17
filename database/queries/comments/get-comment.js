const connection = require('../../connection/index')

const getComments = (id) => connection.query({
    text: 'SELECT user.id as user_id, user.user_name, comment.id, comment.content, comment.created_date,comment.liks FROM user JOIN comment ON comment.user_id =user.id JOIN post ON comment.post_id = post.id WHERE post.id=$1 ORDER BY comment.date DESC;',
    values: [id],
  });


  module.exports = getComments