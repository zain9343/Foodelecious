const mongoose=require("mongoose")
const connect=()=>{
    mongoose.connect("mongodb+srv://abbas:fBdba6lmRQdntuFG@cluster0.rmtid.mongodb.net/Food?retryWrites=true&w=majority",{
    
    
        useUnifiedTopology:true,
        useNewUrlParser:true
    
    
    })
    const db=mongoose.connection
    db.on("error",function(){
        console.log("error")
    })
    db.once("open",function(){
        console.log("Food DataBase Has Been Connected ")
    })
    }

    module.exports=connect