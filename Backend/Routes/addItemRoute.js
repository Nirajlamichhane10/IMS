const express = require("express");
const router = express.Router();
const addItemController = require("../Controller/itemController");

router.post("/item", addItemController.addNewItem);

router.get("/getItem", addItemController.getAllItems);

module.exports = router;



















// const express = require('express');
// const router = express.Router();

// const addItem = require("../models/addItem");


// router.post('/item', async (req, res) => {
   
//     const newAddItem= new addItem({itemName:req.body.itemName,unitOfItem:req.body.unitOfItem,quantity:req.body.quantity,minimum:req.body.minimum});
    
//     try{
//      const response= await newAddItem.save();
//       res.send("yay i have sucessfully posted you item in database");
     
//     }
//     catch(e){
//       res.send(e);
//     }
//   })
  
//   router.get('/getItem', async (req, res) => {
    
//     try{
//      const response= await addItem.find();
//       res.json(response);
     
//     }
//     catch(error){ 
//       res.send(error);
//     }
//   })


//   module.exports = router;