const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

});

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: '7d',
  });
 
  await user.save();

  return token;
};

const User = mongoose.model('user', userSchema);

const validate = (data) => {
  const schema = Joi.object({
   
    username: Joi.string().required().label('username'),
    password: passwordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = { User, validate };