const mongoose = require('mongoose');

const purchaseInvoiceSchema = new mongoose.Schema({
 
  invoiceNumber: { type: String, required: true },
  
 

});

module.exports = mongoose.model("purchaseInvoice", purchaseInvoiceSchema);