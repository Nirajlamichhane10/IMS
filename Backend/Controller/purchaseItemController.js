const purchaseItem = require("../models/purchaseItem");
const addItem = require("../models/addItem");

const postPurchase = async (req, res) => {
    const newPurchaseItem = new purchaseItem({
        invoiceNumber: req.body.invoiceNumber,
        billDate: req.body.billDate,
        supplierName: req.body.supplierName,
        grandTotal: req.body.grandTotal,
        items: req.body.items
    });

    try {        
        const response = await newPurchaseItem.save();
        res.json(response);


        // stock management where as adding qunatity from here 
        await Promise.all(newPurchaseItem.items.map(async (item) => {
            let stock = await addItem.findOne({'itemName': item.itemName});
             stock.quantity+=item.quantity;
            
             await addItem.findByIdAndUpdate(stock._id, stock, { new: true });
            // console.log(stock._id);
            // console.log(stock);
           
          }));

     

    } catch (error) {
        res.send(error);
    }
};

//for graand total

const calculateGrandTotal = (data) => {
    let grandTotal = 0;
    data.items.map((eachInvoice) => (grandTotal += eachInvoice.total));
    console.log("grand total");
    console.log(grandTotal);
    console.log(data);
    setGrandTotal(grandTotal);
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
        // const invoiceNumber = req.body.invoiceNumber;
        // console.log("invoice number");
        // console.log(invoiceNumber);
        const response = await purchaseItem.find();
        res.json(response);
    }
    catch(error){
        res.send(error);
    }
}


// fetching data using  invoice number 
const getInvoiceData = async (req, res ) => {
    try {
        const invoiceNumber = req.body.invoiceNumber;
        // console.log("invoice number");
        // console.log(invoiceNumber);
        const response = await purchaseItem.find({
            'invoiceNumber':invoiceNumber
        });
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













  module.exports = {
    postPurchase,
    getPurchase,
    getInvoice,
    getInvoiceData,
   
   
    
};