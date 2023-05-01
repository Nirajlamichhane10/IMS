const sellItem = require("../models/sellItem");
const addItem = require("../models/addItem");

const postSell = async (req, res) => {
    const newSellItem = new sellItem({
        invoiceNumber: req.body.invoiceNumber, 
        billDate: req.body.billDate,
        customerName: req.body.customerName,
        items: req.body.items
    });

    try {
        const response = await newSellItem.save();
        res.json(response);


        // decrease quantity from sell here 
        await Promise.all(newSellItem.items.map(async (item) => {
          let stock = await addItem.findOne({'itemName': item.itemName});
           stock.quantity-=item.quantity;
          
           await addItem.findByIdAndUpdate(stock._id, stock, { new: true });
          // console.log(stock._id);
          // console.log(stock);
         
        }));

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

// seaching by invoice number 
const getInvoice = async (req, res ) => {
    try {
        // const invoiceNumber = req.body.invoiceNumber;
        // console.log("invoice number");
        // console.log(invoiceNumber);
        const response = await sellItem.find();
        res.json(response);
    }
    catch(error){
        res.send(error);
    }
}


// fetching data using  invoice number 
const getInvoiceData = async (req, res ) => {
    try {
        const invoiceNumber = req.body.invoiceNumber;
        console.log("invoice number");
        // console.log(invoiceNumber);
        const response = await sellItem.find({
            'invoiceNumber':invoiceNumber
        });
        res.json(response);
    }
    catch(error){
        res.send(error);
    }
}


// // seaching by invoice number 
// const getSellInvoice = async (req, res ) => {
//     try {
//         const invoiceNumber = req.body.invoiceNumber;
//         // console.log("Invoice number ");
//         // console.log(invoiceNumber);
//         const response = await sellItem.find({'invoiceNumber':invoiceNumber});
//         res.json(response);
//     }
//     catch(error){
//         res.send(error);
//     }
// }


// // fetching data of Customers 
// exports.getCustomers = async (req, res) => {
//     try {
//       const response = await addCustomer.find({}, {customerName: 1, _id: 0}); // modify to return only customer name
//       res.json(response);
//     } catch (error) {
//       res.send(error);
//     }
//   };



  




  module.exports = {
    postSell,
    getSell,
    getInvoice,
    getInvoiceData,
   
};
