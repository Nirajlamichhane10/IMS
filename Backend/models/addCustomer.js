const mongoose = require('mongoose');

const addCustomerSchema = new mongoose.Schema({
 
  customerName: { type: String, required: true },
  customerContact: { type: Number, required: true },
  customerEmail: { type: String, required: true },
  customerAddress: { type: String, required: true },


});

module.exports = mongoose.model("addCustomer", addCustomerSchema);