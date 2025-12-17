
const User=require('../model/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const UserRegister=async(req,res)=>{
    
    try{
        
    const{name,email,password,role}=req.body;
     const foundname=await User.findOne({name:name});
     if(foundname){
        return res.status(400).json({message:"Username already exists"});
     }
    const hashedPassword=await bcrypt.hash(password, 10); // Implement password hashing here

    let user=await User.create({
        name,
        email,
        password: hashedPassword,
        role
    }); 
    user.save();
    if(!user){
        return res.status(400).json({message:"User registration failed"});
    }
    res.send("User Register successfully");
    }
    catch(error){
        res.status(500).json({message:"Internal server error",error:error.message});
    }

};

const userLogin=async(req,res)=>{
   
   try{
    const {email,password}=req.body;
   const user = await User.findOne({ email: email });
if(!user){
    return res.status(400).json({message:"Invalid credentials"});
}
console.log(password,user.password);

const isMatch = await bcrypt.compare(password, user.password);
console.log(isMatch);
if(!isMatch){
    return res.status(400).json({message:"Invalid credentials"});
}

// Generate JWT
const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_TOKEN, {expiresIn:'1h'});
res.status(200).json({message:"Login successful", token});
console.log(req.headers);
   } 

 catch(error){
    res.status(500).json({message:"Internal server error",error:error.message});
    console.log(error.message);
 }

   }


module.exports={userRegister:UserRegister,userLogin};


