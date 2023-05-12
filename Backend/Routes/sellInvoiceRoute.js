const express = require("express");
const router = express.Router();
const {createSellInvoice, getSellInvoice, updateSellInvoice} = require("../Controller/sellInvoiceController");


router.post("/createSellInvoice", createSellInvoice);
router.get("/getSellInvoice", getSellInvoice);
router.post("/updateSellInvoice", updateSellInvoice);


module.exports = router;