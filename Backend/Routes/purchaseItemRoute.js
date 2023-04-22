// const express = require('express');
// const router = express.Router();
// const  { updatePurchaseItem, createPurchaseItem, getPurchaseItem, deletePurchaseItem } = require("../Controller/purchaseItemController");

// router.post('/purchase', createPurchaseItem);
// router.get('/getPurchase', getPurchaseItem );



// // router.delete('/delete/purchaseItem/:id'.deletePurchaseItem);

// // router.route('/update/purchaseItem/:id').put(updatePurchaseItem);

// module.exports = router;

const express = require('express');
const router = express.Router();
const purchaseController = require("../Controller/purchaseItemController");

router.post('/purchase', purchaseController.postPurchase);
router.get('/getPurchase', purchaseController.getPurchase);


module.exports = router;
























// const express = require('express');
// const router = express.Router();

// const purchaseItem = require("../models/purchaseItem");


// router.post('/purchase', async (req, res) => {
   
//     const newPurchaseItem= new purchaseItem({invoiceNumber:req.body.invoiceNumber,billDate:req.body.billDate,supplierName:req.body.supplierName,items:req.body.items});

//     try{
//      const response= await newPurchaseItem.save();
//       res.send("yay i have sucessfully posted all Purchase item in database");
     
//     }
//     catch(e){
//       res.send(e);
//     }
//   })
  
//   router.get('/getPurchase', async (req, res) => {
    
//     try{
//      const response= await purchaseItem.find();
//       res.json(response);
     
//     }
//     catch(error){ 
//       res.send(error);
//     }
//   })
  


//   module.exports = router;