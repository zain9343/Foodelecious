
const secret = "dvkydhdiad465121@#$%cffkubjvhfhwuirhewiuqwoegqueyg";
const jwt = require("jsonwebtoken");
const auth=(req,res,next)=>{

const sessionToken=req.header("auth-token")
    if(sessionToken){

        const token=jwt.verify(sessionToken,secret)
        req.user=token.user
        
        next()

    }
    else{
        res.sendStatus(401).send("Invalid Token")
    }


}
module.exports=auth