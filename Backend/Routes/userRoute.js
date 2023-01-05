const express = require('express');
const router = express.Router();

const User = require("../models/user");


router.get('/authDetails',async (req,res)=>{
try{
  const password= req.body.password;
 
  const userDetails= await User.find({username:req.body.username});
 
  if(userDetails.length==0){
    res.send("User Not Found");
  }
  else if(userDetails[0].password==password){
  res.send("authenticated");
 }
 else{
  res.send("password incorrect");

 }

}

catch(e){
  res.send(e);
}


})

router.post('/post', async (req, res) => {
    const user= new User({username: "Niraj", password: "Niraj"});
    try{
     const response= await user.save();
      res.send("yay i have sucessfully updated your post");
     
    }
    catch(e){
      res.send("sorry i cannot post your information");
    }
  })

  module.exports = router;