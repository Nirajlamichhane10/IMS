const express = require('express');
const { updateCustomer, createCustomer, getCustomers, deleteCustomer } = require('../Controller/customerController');
const router = express.Router();


router.post("/customer", createCustomer);

router.get("/getCustomer", getCustomers);

router.delete('/delete/customer/:id',deleteCustomer);

router.route('/update/customer/:id').put(updateCustomer);






module.exports = router;
























//  const express = require('express');
// const addCustomer = require('../models/addCustomer');
// const router = express.Router();



// const addSupplier= require("../models/addCustomer")

// router.post('/customer', async (req, res) => {
    
//     const newAddCustomer= new addCustomer({

//       customerName:req.body.customerName,
//       customerContact:req.body.customerContact,
//       customerEmail:req.body.customerEmail,
//       customerAddress:req.body.customerAddress});
      
//     try{
//      const response= await newAddCustomer.save();
//       res.send("yay i have sucessfully posted you item in database");
     
//     }
//     catch(error){ 
//       res.send(error);
//     }
//   })

//   router.get('/getCustomer', async (req, res) => {
    
    
//     try{
//      const response= await addCustomer.find();
//       res.json(response);
     
//     }
//     catch(error){ 
//       res.send(error);
//     }
//   })

//   module.exports = router;




