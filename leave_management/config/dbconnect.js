const mongo=require('mongoose');

const connectDB=async()=>{
    try{
         await mongo.connect(process.env.mongo_url);
         console.log("connected sucessfully");

    }
 catch(error){
    console.log("connection failed!",error.message);
    process.exit(1);

 }

   


};

module.exports=connectDB;