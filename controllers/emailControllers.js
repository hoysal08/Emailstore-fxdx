const emailSC = require("../models/emailmodels");

module.exports.addEmail = async (req, res) => {
  try {
    const { email } = req.body;
    await emailSC.updateOne({}, { $push: { emails: [email] } });
    return res.status(200).json({ msg: "Email added successfully" });
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
