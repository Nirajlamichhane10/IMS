const express = require('express');
const { updateSupplier, createSupplier, getSuppliers, deleteSupplier } = require('../Controller/supplierController');
const router = express.Router();
// const supplierController = require('../Controller/supplierController');

router.post('/supplier', createSupplier);

router.get('/getSupplier', getSuppliers);

// router.put('/update/supplier/:id',updateSupplier);

router.delete('/delete/supplier/:id',deleteSupplier);

router.route('/update/supplier/:id').put(updateSupplier);

module.exports = router;





























// const express = require('express');
// const router = express.Router();



// const addSupplier= require("../models/addSupplier")

// router.post('/supplier', async (req, res) => {
    
//     const newAddSupplier= new addSupplier({supplierName:req.body.supplierName,supplierContact:req.body.supplierContact,supplierEmail:req.body.supplierEmail,supplierAddress:req.body.supplierAddress});
//     try{
//      const response= await newAddSupplier.save();
//       res.send("yay i have sucessfully posted you item in database");
     
//     }
//     catch(error){ 
//       res.send(error);
//     }
//   })

//   router.get('/getSupplier', async (req, res) => {
    
    
//     try{
//      const response= await addSupplier.find();
//       res.json(response);
     
//     }
//     catch(error){ 
//       res.send(error);
//     }
//   })

//   module.exports = router;





