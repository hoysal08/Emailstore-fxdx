const { default: mongoose } = require("mongoose");

const emailSchema=new mongoose.Schema({
    emails:Array
})

module.exports=mongoose.model("emailSC",emailSchema)