const mongoose = require('mongoose');

const sellItemSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  billDate: { type: Date, required: true },
  customerName: { type: String, required: true },
  items: [
    {
      // itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'addItem', required: true },
      itemName: { type: String, required: true },
      unitOfItem: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('sellItem', sellItemSchema);