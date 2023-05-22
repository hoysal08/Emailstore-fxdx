const {addEmail,GetEmails}=require("../controllers/emailControllers")
const router=require('express').Router();

router.post("/add",addEmail);
router.get("/emails",GetEmails);

module.exports=router;