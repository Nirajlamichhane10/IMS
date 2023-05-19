const purchaseInvoice = require("../models/purchaseInvoice");


exports.createPurchaseInvoice = async (req, res) => {
    const newPurchaseInvoice = new purchaseInvoice({ invoiceNumber:'GMS-P-2080-81-01' });
    try {
      const response = await newPurchaseInvoice.save();
      res.send("yay i have sucessfully saved your invoice number");
    } catch (e) {
      res.send("sorry i cannot post your information");
    }
  };

// invoice in purchase table and another table 
  exports.getPurchaseInvoice = async (req, res) => {
    
    try {
      const response = await purchaseInvoice.find();
      res.send(response);
    } catch (e) {
      res.send(e);
    }
  };
 

  exports.updatePurchaseInvoice = async (req, res, next) => {
    // console.log("invoice number");
    // console.log(req.body.invoiceNumber);
    let tempPurchaseInvoice= await purchaseInvoice.findById(req.body.id);
    
  
    if (!tempPurchaseInvoice){
      return next("Invoice Number not found with the given ID",404);
    }
    tempPurchaseInvoice = await purchaseInvoice.findByIdAndUpdate(req.body.id,req.body,{
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
    res.status(200).json({
      success:true,
      tempPurchaseInvoice,
    })
  }