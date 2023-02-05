const express = require('express');
const router = express.Router();



const addSuppliers= require("../models/addSuppliers")

router.post('/suppliers', async (req, res) => {
    
    const newAddSuppliers= new addSuppliers({supplierName:req.body.supplierName,supplierContact:req.body.supplierContact,supplierEmail:req.body.supplierEmail,supplierAddress:req.body.supplierAddress});
    
    try{
     const response= await newAddSuppliers.save();
      res.send("yay i have sucessfully posted you item in database");
     
    }
    catch(e){
      res.send(e);
    }
  })

  module.exports = router;