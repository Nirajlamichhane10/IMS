const User = require("../models/user");
const bcrypt = require('bcryptjs');

exports.getUser = async (req, res) =>{
try { 
 const tempUsers = await User.find();
 res.send(tempUsers);
}
catch(error){
  res.send(error);
}
};



exports.authenticateUser = async (req, res) => {
  try {
    const userDetails = await User.find({ username: req.headers.username });
    const validatepassword = await bcrypt.compare(
      req.headers.password,
      userDetails[0].password,
  );
  // console.log("validaing password");
  // console.log(!validatepassword);
  // console.log(req.headers.password);
  // console.log(userDetails[0].password);
    if (userDetails.length == 0) {
      res.send({ message: "User Not Found" });
    } else if (validatepassword) {
      res.send({ message: "authenticated" });
    } else {
      res.send({ message: "password incorrect" });
    }
  } catch (error) {
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  const password = "Niraj";
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ pin :1234, username: "Niraj", password:hashedPassword });
  try {
    const response = await user.save(); 
    res.send("yay i have sucessfully updated your post");
  } catch (e) {
    res.send("sorry i cannot post your information");
  }
};


//forget password
 //update  for user
 exports.updateUser = async (req, res, next) => {
  let foundUser= await User.findById(req.params.id);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  req.body.password = hashedPassword;
  
  if (!foundUser){
    // return next("User not found",404);
    res.send("user not found")
  }
  updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  // res.status(200).json({
  //   success:true,
  //   updatedUser,
  // })
  res.send("User updated sucessfully");
}