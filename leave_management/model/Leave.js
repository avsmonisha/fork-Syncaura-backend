const mongo=require('mongoose');

const LeaveSchema=new mongo.Schema({
 user:{
    type:mongo.Schema.Types.ObjectId,
    ref:"User",
    required:true
 },
 fromDate:{
    type:Date,
    required:true
 },
 toDate:{
    type:Date,
    required:true
 },
 reason:{
    type:String,
    required:true,
    trim:true
 },
 status:{
    type:String,
    enum:["pending","approved","rejected"]
 },
 reviewedBy:{
    type:mongo.Schema.Types.ObjectId,
    ref:"User",
    default:null
 },
 reviewedAt:{
    type:Date,
    default:null
 }
},{
    timestamps:true
 }
);

const Leave=mongo.model("Leave",LeaveSchema);

module.exports=Leave;