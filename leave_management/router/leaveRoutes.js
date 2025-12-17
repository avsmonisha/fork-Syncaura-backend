const express=require('express');
const router=express.Router();
const authenticateUser=require('../middleware/authMiddleware');
const {
    applyLeave,
    getMyLeaves
    ,getAllLeaves,
    approveLeave,
    rejectLeave
}=require('../controller/leaveController');

router.post('/applyleave',authenticateUser,applyLeave);
router.get('/myleaves',authenticateUser,getMyLeaves);
router.get('/allleaves', authenticateUser, getAllLeaves);
router.put('/:id/approve', authenticateUser, approveLeave);
router.put('/:id/reject', authenticateUser, rejectLeave);



module.exports=router;