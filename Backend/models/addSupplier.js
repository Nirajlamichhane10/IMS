const mongoose = require('mongoose');

const addSupplierSchema = new mongoose.Schema({
 
  supplierName: { type: String, required: true },
  supplierContact: { type: Number, required: true },
  supplierEmail: { type: String, required: true },
  supplierAddress: { type: String, required: true },


});

module.exports = mongoose.model("addSupplier", addSupplierSchema);