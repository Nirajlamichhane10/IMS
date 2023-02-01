const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

//Importing Routes
const userRoute = require("./Routes/userRoute");
const addItemRoute = require("./Routes/addItemRoute");

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

app.use(cors());
app.use(express.json());
app.use("/auth",userRoute);
app.use("/addItem",addItemRoute);

app.listen(5000, () => {
    console.log("Server strated on port 5000");
});