const connection = require('../../connection/index')

const getCommentsById = (id) => connection.query({
    text: 'SELECT user.id as user_id, user.user_name, comment.id, comment.content,comment.created_date,comments.liks FROM user JOIN comment ON comment.user_id =user.id WHERE comment.user_id=$1;',
    values: [id],
  });

  module.exports = getCommentsById;