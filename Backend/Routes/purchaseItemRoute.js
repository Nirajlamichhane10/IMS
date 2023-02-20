const express = require('express');
const router = express.Router();

const addItem = require("../models/purchaseItem");


router.post('/purchaseItem', async (req, res) => {
   
    const newPurchaseItem= new purchaseItem({invoiceNumber:req.body.invoiceNumber,billDate:req.body.billDate,supplierName:req.body.supplierName,itemName:req.body.itemName,unit:req.body.unit,quantity:req.body.quantity,price:req.body.price,total:req.body.total});

    try{
     const response= await newPurchaseItem.save();
      res.send("yay i have sucessfully posted all Purchase item in database");
     
    }
    catch(e){
      res.send(e);
    }
  })
  
  router.get('/purchase', async (req, res) => {
    
    try{
     const response= await purchaseItem.find();
      res.json(response);
     
    }
    catch(error){ 
      res.send(error);
    }
  })
  


  module.exports = router;