const express = require('express');
const router = express.Router();



const addSupplier= require("../models/addSupplier")

router.post('/supplier', async (req, res) => {
    
    const newAddSupplier= new addSupplier({supplierName:req.body.supplierName,supplierContact:req.body.supplierContact,supplierEmail:req.body.supplierEmail,supplierAddress:req.body.supplierAddress});
    try{
     const response= await newAddSupplier.save();
      res.send("yay i have sucessfully posted you item in database");
     
    }
    catch(error){ 
      res.send(error);
    }
  })

  router.get('/getSupplier', async (req, res) => {
    
    
    try{
     const response= await addSupplier.find();
      res.json(response);
     
    }
    catch(error){ 
      res.send(error);
    }
  })

  module.exports = router;