const { default: mongoose } = require("mongoose");

const emailSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    address:String
})

module.exports=mongoose.model("emailSC",emailSchema)