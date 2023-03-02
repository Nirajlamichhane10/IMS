const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

async function connect(){
    try{
        await mongoose.connect(process.env.uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                
            },
            
            );

        console.log("Connected to MongoDB");
    } catch (error){
        console.error(error);
    }
}
 
connect();


// Importing Routes
const userRoute = require("./Routes/userRoute");
const itemRoute = require("./Routes/addItemRoute");
const supplierRoute = require("./Routes/addSupplierRoute");
const purchaseItemRoute = require("./Routes/purchaseItemRoute");
const addCustomerRoute = require("./Routes/addCustomerRoute");

app.use(cors());
app.use(express.json());
app.use("/auth",userRoute);
app.use("/addItem",itemRoute);
app.use("/addSupplier",supplierRoute);
app.use("/addCustomer",addCustomerRoute);
app.use("/purchaseItem",purchaseItemRoute);

app.listen(5000, () => {
    console.log("Server strated on port 5000");
});