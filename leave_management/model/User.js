const mongo=require('mongoose');

const UserSchema=new mongo.Schema({
 name:{
    type:String,
    required:true,
    trim: true
 },
 email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
 },
 password:{
    type:String,
    required:true
 },
 role:{
    type:String,
    enum:['user','admin','coadmin'],
    default:'user'
 }},{
    timestamps:true
 }
);


const User=mongo.model("Users",UserSchema);

module.exports=User;
