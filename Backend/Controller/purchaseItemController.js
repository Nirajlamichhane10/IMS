const purchaseItem = require("../models/purchaseItem");

const postPurchase = async (req, res) => {
    const newPurchaseItem = new purchaseItem({
        invoiceNumber: req.body.invoiceNumber,
        billDate: req.body.billDate,
        supplierName: req.body.supplierName,
        items: req.body.items
    });

    try {
        const response = await newPurchaseItem.save();
        res.send("yay i have sucessfully posted all Purchase item in database");
    } catch (error) {
        res.send(error);
    }
};

const getPurchase = async (req, res) => {
    try {
        const response = await purchaseItem.find();
        res.json(response);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    postPurchase,
    getPurchase
};