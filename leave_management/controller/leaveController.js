const Leave=require('../model/Leave');

const applyLeave=async(req,res)=>{
    try{
        console.log("REQ.USER 👉", req.user);
        console.log("REQ.BODY 👉", req.user.role);
         if (!req.user) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        if (req.user.role !== 'user') {
            return res.status(403).json({ message: "Only users can apply leave" });
        }

        const{fromDate,toDate,reason}=req.body;
        const userId=req.user.id;

        console.log("Applying leave for user:",userId);

        const newLeave=new Leave({
            fromDate:fromDate,
            toDate:toDate,
            reason:reason,
            user:userId
        });

        await newLeave.save();
        res.status(201).json({message:"Leave applied successfully"});
    }catch(error){
        console.error("Error applying leave:",error);
        res.status(500).json({message:"Error applying leave"});
    }
};


const getMyLeaves=async(req,res)=>{

    try{
     let role = req.user.role;
        if (!req.user) {
            return res.status(401).json({ message: "User not authenticated" });
    }

    if(role !== 'user' && role !== 'admin' && role !== 'coadmin') {
        return res.status(403).json({ message: "Only users, admins, and coadmins can access this route" });
    }
     const userId = req.user.id;
     console.log("Fetching leaves for user:", userId);
     

     const leaves = await Leave.find({ user: userId });
     if(leaves.length === 0){
        return res.status(404).json({ message: "No leaves found for this user" });
     }
        res.status(200).json({ leaves });



}

catch(error){
    console.error("Error fetching leaves:", error);
    res.status(500).json({ message: "Error fetching leaves" }); 
}

}


const getAllLeaves=async(req,res)=>{
     let role= req.user.role;
     if(!req.user){
        return res.status(401).json({message:"User not authenticated"});
     }      
      if (!['admin', 'coadmin'].includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied" });
    }
    try{
      const leaves=await Leave.find({});

      if(leaves.length===0){    
        return res.status(404).json({message:"No leaves found"});
      }

      res.status(200).json({ leaves });
    }
    catch(error){
        console.error("Error fetching all leaves:", error);
        res.status(500).json({ message: "Error fetching all leaves" });
    }   


}



const approveLeave=async(req,res)=>{
    if(!['admin','coadmin'].includes(req.user.role)){
        return res.status(403).json({message:"Access denied"});
    }

    try{
const leaveId=req.params.id;
const leave=await Leave.findById(leaveId);
console.log("Leave to approve:", leave); 
console.log("Leave ID:", leaveId);   
if(!leave){
    return res.status(404).json({message:"Leave not found"});
}leave.status='approved';
leave.reviewedBy=req.user.id;
leave.reviewedAt=new Date();
await leave.save();
res.status(200).json({message:"Leave approved successfully"});

    }
 catch(error){
    console.error("Error approving leave:",error);

   res.status(500).json({message:"Error approving leave"});
 }

}

const rejectLeave = async (req, res) => {
    try {
        if (!['admin', 'coadmin'].includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }

        const leave = await Leave.findById(req.params.id);
        if (!leave) {
            return res.status(404).json({ message: "Leave not found" });
        }

        if (leave.status !== 'pending') {
            return res.status(400).json({ message: "Leave already reviewed" });
        }

        leave.status = 'rejected';
        leave.reviewedBy = req.user.id;
        leave.reviewedAt = new Date();  

        await leave.save();

        res.json({ message: "Leave rejected successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports={applyLeave,getMyLeaves,getAllLeaves,approveLeave,rejectLeave};