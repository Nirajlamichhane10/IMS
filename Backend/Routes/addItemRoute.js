const express = require('express');
const router = express.Router();

const addItem = require("../models/addItem");


router.post('/add', async (req, res) => {
    // {itemName,unitOfItem,quantity,minimum}=req;
    const newAddItem= new addItem({itemName:req.body.itemName,unitOfItem:req.body.unitOfItem,quantity:req.body.quantity,minimum:req.body.minimum});
    // const newAddItem= new addItem(req.body.item);
    try{
     const response= await newAddItem.save();
      res.send("yay i have sucessfully posted you item in database");
     
    }
    catch(e){
      res.send(e);
    }
  })
  
  router.get('/add', async (req, res) => {
    
    try{
     const response= await addItem.find();
      res.json(response);
     
    }
    catch(error){ 
      res.send(error);
    }
  })


  module.exports = router;