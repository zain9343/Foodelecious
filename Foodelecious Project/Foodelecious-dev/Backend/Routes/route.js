const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userModel = require("../Models/users");
const blogModel=require("../Models/blogs")
const jwt = require("jsonwebtoken");
const auth=require("../middleware")
const secret = "dvkydhdiad465121@#$%cffkubjvhfhwuirhewiuqwoegqueyg";

// Router To Signup or Create a User
router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  user = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  };

  const data = await userModel.create(user);
  res.json("Signed up successfully");
});

// Router To Login
router.post("/login", async (req, res) => {
  const {email,password}=req.body
  const user = await userModel.findOne({email});
  const data={
      user:{
          id:user.id
      }
  }

  if (!user) {
    res.send("Incorrect Username or Password");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.send("Incorrect Username or Password");
  }

  if (user && validPassword) {
    const tokenGenerated = jwt.sign(data,secret);

    res.json(tokenGenerated);
  }
});


// Route to Write The Blog Content

router.post("/writeBlog",auth,async (req,res)=>{

  const {description,title}=req.body
  user=await blogModel.create({title:title,description:description,user:req.user.id});
  res.send(user)

})

// Route to Get The Existing Blog of a Particular User

router.get("/getBlog",auth,async (req,res)=>{

const blogs=await blogModel.find({user:req.user.id})
const user=await userModel.find({_id:req.user.id})
 res.json({blogs:blogs,user:user})

})
//Route to Get All The Blogs
router.get("/getBlogs",async (req,res)=>{

  const blogs=await blogModel.find()
   res.json(blogs)
  
  })

//Route to Update The Existing Blog
router.put("/update/:id",auth,async(req,res)=>{

  const {title,description}=req.body
 let newBlog={}
  if(title){
    newBlog.title=title
  }
  if(description){
    newBlog.description=description
  }
let blog=await blogModel.findById(req.params.id)

 if(!blog){
   res.sendStatus(404).send("Blog Not Found")

 }

 if(blog.user.toString()!==req.user.id){

  res.sendStatus(404).send("Access denied")

 }
 blog=await blogModel.findByIdAndUpdate(req.params.id,{$set:newBlog},{new:true})
 res.json({blog})




})


// Route to Delete the Existing Blog

  router.delete("/delete/:id",auth,async(req,res)=>{
  
  
  let blog=await blogModel.findById(req.params.id)
  
   if(!blog){
     res.sendStatus(404).send("Blog Not Found")
  
   }
  
   if(blog.user.toString()!==req.user.id){
  
    res.sendStatus(401).send("Access denied")
  
   }
   blog=await blogModel.findByIdAndDelete(req.params.id)
   res.send("Deleted Successfully")
  
  
  
  
  })
  


module.exports = router;


