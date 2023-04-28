
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  pin: {type: Number, require: true},
  username: { type: String, required: true },
  password: { type: String, required: true },

});
 

module.exports = mongoose.model("User", userSchema);