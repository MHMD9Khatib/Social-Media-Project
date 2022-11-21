const connection = require('../../connection');
const hashPassword = require('../../../b-crypt');
const { compare, hash } = require('bcryptjs');

module.exports = async ({ name, email, password }) => {
  try{
    const hashedPassword = await hash(password, 8);
    const { rows } = await connection
    .query(
      `
      INSERT INTO users (name,email,password)
      VALUES ($1,$2,$3) 
      RETURNING id, name;`,
      [name, email, hashedPassword],
    );

  return rows[0];

  }catch(err){
    console.log(err);
  }
  
};
