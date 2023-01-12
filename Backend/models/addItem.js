const mongoose = require('mongoose');

const addItemSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

});

module.exports = mongoose.model("AddItem", addItemSchema);