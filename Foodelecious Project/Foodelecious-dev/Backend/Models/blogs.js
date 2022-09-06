const mongoose=require("mongoose")
const Users = require("./users")
const blogSchema=new mongoose.Schema({


    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'users'


    },
    title:{

        type:String,
        minlength:3,
        required:true

    },
    description:{
        type:String,
        required:true,
        minlength:6
    }
})
const Blogs=mongoose.model("blogs",blogSchema)
module.exports=Blogs



