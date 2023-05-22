const {addEmail,GetEmails, GetByemail}=require("../controllers/emailControllers")
const router=require('express').Router();

router.post("/add",addEmail);
router.get("/emails",GetEmails);
router.get("/getbyemail",GetByemail);
module.exports=router;