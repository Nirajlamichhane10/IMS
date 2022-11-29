const mongoose=require('mongoose');
require('dotenv').config()

var MongoClient = require('mongodb').MongoClient

module.exports=async()=>{

    try{
        await  MongoClient.connect(process.env.DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
          console.log("connected successfully")

    }catch(error){
        console.log(error.message);

    }
}