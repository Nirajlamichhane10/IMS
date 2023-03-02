const User = require("../models/user");

exports.authenticateUser = async (req, res) => {
  try {
    const userDetails = await User.find({ username: req.headers.username });

    if (userDetails.length == 0) {
      res.send({ message: "User Not Found" });
    } else if (userDetails[0].password === req.headers.password) {
      res.send({ message: "authenticated" });
    } else {
      res.send({ message: "password incorrect" });
    }
  } catch (error) {
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  const user = new User({ username: "Niraj", password: "Niraj" });
  try {
    const response = await user.save();
    res.send("yay i have sucessfully updated your post");
  } catch (e) {
    res.send("sorry i cannot post your information");
  }
};