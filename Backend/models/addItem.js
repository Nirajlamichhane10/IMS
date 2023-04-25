const mongoose = require('mongoose');

const addItemSchema = new mongoose.Schema({
 
  itemName: { type: String, required: true },
  unitOfItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  minimum: { type: Number, required: true },
  price: { type: Number, required: true },


});

module.exports = mongoose.model("addItem", addItemSchema);