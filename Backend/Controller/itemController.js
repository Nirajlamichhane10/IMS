const addItem = require("../models/addItem");

exports.createItem = async (req, res) => {
  const newAddItem = new addItem({
    itemName: req.body.itemName,
    unitOfItem: req.body.unitOfItem,
    quantity: req.body.quantity,
    minimum: req.body.minimum,
  });

  try {
    const response = await newAddItem.save();
    res.send("yay i have sucessfully posted you item in database");
  } catch (error) {
    res.send(error);
  }
};


 //update  for customer 
 exports.updateItem = async (req, res, next) => {
  let item= await addItem.findById(req.params.id);

  if (!item){
    return next("Customer not found with the given ID",404);
  }
  item = await addItem.findByIdAndUpdate(req.params.id,req.body,{
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success:true,
    item,
  })
}



 // delete  for add items

 exports.deleteItem = async (req, res, next) => {
  let item= await addItem.findById(req.params.id);

  if (!item){
    return next("Customer not found with the given ID",404);
  }
  await item.remove();
  res.status(200).json({
    success:true,
    item,
  })
}





exports.getItem = async (req, res) => {
  try {
    const response = await addItem.find();
    res.json(response);
  } catch (error) {
    res.send(error);
  }
};