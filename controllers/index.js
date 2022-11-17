// const { application } = require('express');
// const pool = require('../database/connection/index');
// const queries = require('../database/queries/user/index');

// const getData = (req, res) =>{
//     pool.query(queries.getData, (error, results) =>{
//         if(error) throw error;
//         res.status(200).json(results.rows);
//     })
// }   

// const getDataById = (req, res) =>{
//     const id = parseInt(req.params.id);
//     pool.query(queries.getDataById, [id], (error, results) =>{
//         if(error) throw error;
//         res.status(200).json(results.rows);
//     });
// }

// const addData = (req, res) =>{
//     const {name, author} = req.body;
//     pool.query(queries.checkEmailExists, [name], (error, results) =>{
//         if(results.rows.length) {
//             return {msg:"Data already exists."};
//         }
        
//     });
   
//     pool.query(queries.addData, [name, author], (error, results) =>{
//         if(error) throw error; 
//         return {msg:"Data created."};


        
//     });

//     if({msg:"Data already exists."}){
//             res.json({msg:"Data already exists."});

//     } else {
//             res.json({msg:"Data created."});
 
//     }

// }

// const removeData = (req, res) =>{
//     const id = parseInt(req.params.id);
//     pool.query(queries.getDataById, [id], (error, results) =>{
//         const noDataFound = !results.rows.length;
//         if(noDataFound){
//             res.json({msg:"Data does not exists in the database"});
//         }
//         pool.query(queries.removeData, [id], (error, results) =>{
//             if(error) throw error; 
//             res.status(200).json({msg:"Data removed successfully."});
            
//         });
//     });
// }

// const updateData= (req, res) =>{
//     const id = parseInt(req.params.id);
//     const {name} = req.body;
//     pool.query(queries.getDataById, [id], (error, results) =>{
//         const noDataFound = !results.rows.length;
//         if(noDataFound){
//             res.json({msg:"Data does not exists in the database"});
//         }
//         pool.query(queries.updateData, [name, id], (error, results) =>{
//             if(error) throw error; 
//             res.status(200).json({msg:"Data updated successfully."});
            
//         });
//     });
    
// }

// module.exports = {
//     getData,
//     getDataById,
//     addData,
//     removeData,
//     updateData,
// };





// const {
//     getUsers,
//     getUserById,
//     deleteUser,
//   } = require('./users');


  const {
    addComment,
    postComments,
    userComments,
    addLike,
    removeLike,
    removeComment,
} = require('./comment/index');

const {
  addPost,
  userPosts,
  userProfile,
  allPosts,
  likeUp,
  likeDown,
  postDelete,
} = require('./post')

  
  module.exports = {
    // getUsers,
    // getUserById,
    // deleteUser,
    
    addComment,
    postComments,
    userComments,
    addLike,
    removeLike,
    removeComment,

    addPost,
    userPosts,
    userProfile,
    allPosts,
    likeUp,
    likeDown,
    postDelete,
    
  };



