const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
  
},{timestamps:true})


module.exports = mongoose.model('DB',studentSchema)