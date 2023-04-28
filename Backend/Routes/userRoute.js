const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");
const { updateUser } = require('../Controller/userController');

router.get("/authDetails", userController.authenticateUser);
router.post("/post", userController.createUser);
router.get("/getUser", userController.getUser);

router.route('/update/user/:id').put(updateUser);


module.exports = router;
















// const express = require('express');
// const router = express.Router();

// const User = require("../models/user");


// router.get('/authDetails',async (req,res)=>{
// try{
 
//   const userDetails= await User.find({username:req.headers.username});
 
//   if(userDetails.length==0){
//     res.send({message:"User Not Found"});
//   }
//   else if(userDetails[0].password === req.headers.password){
//   res.send({message:"authenticated"});
//  }
//  else{
//   res.send({message:"password incorrect"});
//  }

// //  console.log(userDetails);
// //  console.log(req.headers.username);
// //  console.log(req.headers.password);
// //  console.log(userDetails[0].password === req.headers.password);
// }

// catch(e){
//   res.send(e);
// }


// })

// router.post('/post', async (req, res) => {
//     const user= new User({username: "Niraj", password: "Niraj"});
//     try{
//      const response= await user.save();
//       res.send("yay i have sucessfully updated your post");
     
//     }
//     catch(e){
//       res.send("sorry i cannot post your information");
//     }
//   })

//   module.exports = router;

