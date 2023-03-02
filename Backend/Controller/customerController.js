const addCustomer = require("../models/addCustomer");

exports.createCustomer = async (req, res) => {
  const newAddCustomer = new addCustomer({
    customerName: req.body.customerName,
    customerContact: req.body.customerContact,
    customerEmail: req.body.customerEmail,
    customerAddress: req.body.customerAddress,
  });

  try {
    const response = await newAddCustomer.save();
    res.send("yay i have sucessfully posted you item in database");
  } catch (error) {
    res.send(error);
  }
};



 //update  for customer 
exports.updateCustomer = async (req, res, next) => {
  let customer= await addCustomer.findById(req.params.id);

  if (!customer){
    return next("Customer not found with the given ID",404);
  }
  customer = await addCustomer.findByIdAndUpdate(req.params.id,req.body,{
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success:true,
    customer,
  })
}



 // delete  for customer 

exports.deleteCustomer = async (req, res, next) => {
  let customer= await addCustomer.findById(req.params.id);

  if (!customer){
    return next("Customer not found with the given ID",404);
  }
  await customer.remove();
  res.status(200).json({
    success:true,
    customer,
  })
}


exports.getCustomers = async (req, res) => {
  try {
    const response = await addCustomer.find();
    res.json(response);
  } catch (error) {
    res.send(error);
  }
};