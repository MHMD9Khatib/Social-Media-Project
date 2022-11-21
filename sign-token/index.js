const {sign} = require('jsonwebtoken');

const signToken = (payload, secret) => new Promise((resolve, reject) => {
    sign(payload, secret, (err, token ,req) => {
      // console.log('token')

      if (err) {
        reject(err);

      } else resolve.res.json({m: "hh"});
      
    });
    // return res.json({m: "token"});

  });


module.exports = signToken;
