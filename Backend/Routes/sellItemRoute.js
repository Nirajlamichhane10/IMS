const express = require('express');
const router = express.Router();
const sellController = require("../Controller/sellItemController");

router.post('/sell', sellController.postSell);
router.get('/getSell', sellController.getSell);
router.get('/getInvoice', sellController.getInvoice);
router.get('/getInvoiceData', sellController.getInvoiceData);


module.exports = router;
