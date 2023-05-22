const emailSC = require("../models/emailmodels");

module.exports.addEmail = async (req, res) => {
  try {
    console.log(req.body)
    const { email,address } = req.body;
    let User=await emailSC.findOne({ email: email});
    console.log(email);
    console.log(User);
    if(!User){
      await emailSC.create({email:email,address:address});
      return res.status(200).json({ msg: "Email added successfully" });
    }
    return res.status(200).json({ msg:"Email already exists" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Something Went Wrong" });
  }
};

module.exports.GetEmails = async (req, res) => {
  try {
    let emailss = await emailSC.find({});
    return res.status(200).json({ msg: "success", registeredemails: emailss });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Something Went Wrong" });
  }
};

module.exports.GetByemail = async (req, res) => {
  const { email } = req.body;
  try {
    let User=await emailSC.findOne({ email: email});
    if(User){
      return res.status(200).json({ msg: "success", User: User });
    }
    return res.status(404).json({msg:"User Not Found"});
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Something Went Wrong" });
  }
}