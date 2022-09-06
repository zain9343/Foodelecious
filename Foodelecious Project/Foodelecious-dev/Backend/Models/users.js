const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({

    name:{

        type:String,
        minlength:3,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String, 
        minlength:5

    }
})
const Users=mongoose.model("users",userSchema)
module.exports=Users