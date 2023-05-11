const express = require("express");
const router = express.Router();
const {createPurchaseInvoice, getPurchaseInvoice, updatePurchaseInvoice} = require("../Controller/purchaseInvoiceController");


router.post("/createPurchaseInvoice", createPurchaseInvoice);
router.get("/getPurchaseInvoice", getPurchaseInvoice);
router.post("/updatePurchaseInvoice", updatePurchaseInvoice);


module.exports = router;
