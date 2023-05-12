const mongoose = require('mongoose');

const sellInvoiceShema = new mongoose.Schema({

    invoiceNumber:{type: String, required:true},
})

module.exports = mongoose.model("sellInvoice",sellInvoiceShema)