// const mongoose = require('mongoose');

// const purchaseItemSchema = new mongoose.Schema({
//     invoiceNumber: { type: String , required: true },
//     billDate:{type: Date, required:true},
//     supplierName: { type: String, required: true },

//     items :[{


//     itemName: { type: String, required: true },
//     unit: { type: String, required: true },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true },
//     total: { type: Number, required: true },
    

//     }]


// });

// module.exports = mongoose.model("PurchaseItem", purchaseItemSchema );
const mongoose = require('mongoose');

const purchaseItemSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  billDate: { type: Date, required: true },
  supplierName: { type: String, required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'addItem', required: true },
      itemName: { type: String, required: true },
      unitOfItem: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('PurchaseItem', purchaseItemSchema);


































// const mongoose = require('mongoose');

// const purchaseItemSchema = new mongoose.Schema({
//     invoiceNumber: { type: String , required: true },
//     billDate:{type: Date, required:true},
//     supplierDetails: [{
//         supplierId:{
//             type: mongoose.Schema.ObjectId,
//             ref: "addSupplier",
//             required:true
//         },
//         supplierName:{type:String, required: true},
//     },
//     ],
    
//     items :[{

//     itemName: { type: String, required: true },
//     unit: { type: String, required: true },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true },
//     total: { type: Number, required: true },

//     }]
   


// });

// module.exports = mongoose.model("PurchaseItem", purchaseItemSchema );