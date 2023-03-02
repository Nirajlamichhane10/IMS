const addSupplier = require('../models/addSupplier');

exports.createSupplier = async (req, res) => {
  const newAddSupplier = new addSupplier({
    supplierName: req.body.supplierName,
    supplierContact: req.body.supplierContact,
    supplierEmail: req.body.supplierEmail,
    supplierAddress: req.body.supplierAddress
  });
  try {
    const response = await newAddSupplier.save();
    res.send("yay i have successfully posted your item in database");
  } catch (error) {
    res.send(error);
  }
};


// //update  
exports.updateSupplier = async (req, res, next) => {
  let supplier= await addSupplier.findById(req.params.id);

  if (!supplier){
    return next("Supplier not found with the given ID",404);
  }
  supplier = await addSupplier.findByIdAndUpdate(req.params.id,req.body,{
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success:true,
    supplier,
  })
}


// // delete 

exports.deleteSupplier = async (req, res, next) => {
  let supplier= await addSupplier.findById(req.params.id);

  if (!supplier){
    return next("Supplier not found with the given ID",404);
  }
  await supplier.remove();
  res.status(200).json({
    success:true,
    supplier,
  })
}



exports.getSuppliers = async (req, res) => {
  try {
    const response = await addSupplier.find();
    res.json(response);
  } catch (error) {
    res.send(error);
  }
};
