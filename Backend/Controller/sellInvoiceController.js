const sellInvoice = require("../models/sellInvoice");


exports.createSellInvoice = async (req, res) => {
    const newSellInvoice = new sellInvoice({ invoiceNumber:'GMS-S-2080-81-01' });
    try {
      const response = await newSellInvoice.save();
      res.send("yay i have sucessfully saved your invoice number");
    } catch (e) {
      res.send("sorry i cannot post your information");
    }
  };

  exports.getSellInvoice = async (req, res) => {
    
    try {
      const response = await sellInvoice.find();
      res.send(response);
    } catch (e) {
      res.send(e);
    }
  };
 

  exports.updateSellInvoice = async (req, res, next) => {
    // console.log("invoice number");
    // console.log(req.body.invoiceNumber);
    let tempSellInvoice= await sellInvoice.findById(req.body.id);
    
  
    if (!tempSellInvoice){
      return next("Invoice Number not found with the given ID",404);
    }
    tempSellInvoice = await sellInvoice.findByIdAndUpdate(req.body.id,req.body,{
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
    res.status(200).json({
      success:true,
      tempSellInvoice,
    })
  }