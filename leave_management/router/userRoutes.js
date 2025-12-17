

const express = require('express');
const router=express();
const authenticateUser=require('../middleware/authMiddleware');


router.get('/user',authenticateUser,(req,res)=>{
    if(!req.user){
        return res.status(401).json({ message: "User not authenticated" });
    }   
    if(req.user.role !== 'user') {  
        return res.status(403).json({ message: "Access denied" });
    }   
    res.send("User Routes");
    console.log("User Routes");
    console.log(req.user);
});


router.get('/admin',authenticateUser,(req,res)=>{
    if(!req.user){
        return res.status(401).json({ message: "User not authenticated" });
    }   
    if(req.user.role !== 'admin') {  
        return res.status(403).json({ message: "Access denied" });
    }   
    res.send("Admin Profile");
    console.log("Admin Profile");
    console.log(req.user);
}   

);

router.get('/coadmin',authenticateUser,(req,res)=>{
    if(!req.user){      

        return res.status(401).json({ message: "User not authenticated" });
    }

    if(req.user.role !== 'coadmin') {
        return res.status(403).json({ message: "Access denied" });


    }

    res.send("Coadmin Profile");
    console.log("Coadmin Profile");
    console.log(req.user);
});

module.exports=router;