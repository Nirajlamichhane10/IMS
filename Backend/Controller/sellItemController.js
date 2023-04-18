const sellItem = require("../models/sellItem");

const postSell = async (req, res) => {
    const newSellItem = new sellItem({
        invoiceNumber: req.body.invoiceNumber,
        billDate: req.body.billDate,
        customerName: req.body.customerName,
        items: req.body.items
    });

    try {
        const response = await newSellItem.save();
        res.send("yay i have sucessfully posted all Purchase item in database");
    } catch (error) {
        res.send(error);
    }
};

const getSell = async (req, res) => {
    try {
        const response = await sellItem.find();
        res.json(response);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    postSell,
    getSell
};



// fetching data of Customers 
exports.getCustomers = async (req, res) => {
    try {
      const response = await addCustomer.find({}, {customerName: 1, _id: 0}); // modify to return only customer name
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  };