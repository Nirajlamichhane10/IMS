const addItem = require("../models/addItem");

exports.addNewItem = async (req, res) => {
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

exports.getAllItems = async (req, res) => {
  try {
    const response = await addItem.find();
    res.json(response);
  } catch (error) {
    res.send(error);
  }
};