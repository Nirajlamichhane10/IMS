const purchaseItem = require("../models/purchaseItem");

const postPurchase = async (req, res) => {
    const newPurchaseItem = new purchaseItem({
        invoiceNumber: req.body.invoiceNumber,
        billDate: req.body.billDate,
        supplierName: req.body.supplierName,
        items: req.body.items
    });

    try {
        const response = await newPurchaseItem.save();
        res.json(response);
    } catch (error) {
        res.send(error);
    }
};

const getPurchase = async (req, res) => {
    try {
        const response = await purchaseItem.find();
        res.json(response);
    } catch (error) {
        res.send(error);
    }
};


// seaching by invoice number 
const getInvoice = async (req, res ) => {
    try {
        const invoiceNumber = req.body.invoiceNumber;
        console.log("invoice number");
        console.log(invoiceNumber);
        const response = await purchaseItem.find({'invoiceNumber':invoiceNumber});
        res.json(response);
    }
    catch(error){
        res.send(error);
    }
}


// // //update  
// exports.updatePurchaseItem = async (req, res, next) => {
//     let purchaseItem= await addPurchaseItem.findById(req.params.id);
  
//     if (!purchaseItem){
//       return next("PurchaseItem not found with the given ID",404);
//     }
//     purchaseItem = await addPurchaseItem.findByIdAndUpdate(req.params.id,req.body,{
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     })
//     res.status(200).json({
//       success:true,
//       purchaseItem,
//     })
//   }
  
  
//   // // delete 
  
//   exports.deletePurchaseItem = async (req, res, next) => {
//     let purchaseItem= await addPurchaseItem.findById(req.params.id);
  
//     if (!purchaseItem){
//       return next("PurchaseItem not found with the given ID",404);
//     }
//     await purchaseItem.remove();
//     res.status(200).json({
//       success:true,
//       purchaseItem,
//     })
//   }
  



// fetching data of supplier 
// exports.getSuppliers = async (req, res) => {
//     try {
//       const response = await addSupplier.find({}, {supplierName: 1, _id: 0}); // modify to return only supplier name
//       res.json(response);
//     } catch (error) {
//       res.send(error);
//     }
//   };


  // for stock increase in quantity 

 class PurchaseController {
  constructor(initialQuantity) {
    this.quantity = initialQuantity;
  }

  increaseQuantity(quantity) {
    this.quantity += quantity;
    
  }
}










  module.exports = {
    postPurchase,
    getPurchase,
    PurchaseController,
   
    
};