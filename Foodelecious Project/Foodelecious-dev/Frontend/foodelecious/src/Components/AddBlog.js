
import React,{ useContext, useState } from 'react'
import { blogContext } from '../Context/BlogContext'
export default function AddBlog() {
    const {addBlog}=useContext(blogContext)
    const [blog,setblog]=useState({title:"",description:""})
const onClick=(e)=>{
    e.preventDefault()
    
addBlog(blog.title,blog.description)
setblog({title:"",description:""})

}
const onChange=(e)=>{

setblog({...blog,[e.target.name]:e.target.value})
console.log(setblog.title)
    


}
  return (
    <div className="container">
    <p className="h1" id="add" style={{marginTop:"3%",textAlign:"center"}}>Create Your Blog</p> 
    
   <div className='container blogForm my-5'>
      
   <div className="mb-3  ">
       <div className="container ">

 <label htmlFor="For inserting the blog title" className="form-label h2 font" style={{color:"white"}} >Title</label></div>
 <input type="text" value={blog.title}    minLength={3} className="form-control w-50" onChange={onChange}  id="title" name="title" placeholder="Blog Title Here" required/>
</div>
<div className="mb-3">
   
<div className="container h2 font" style={{color:"white"}}> <label htmlFor="For inserting the blog description" className="form-label" >Description</label></div>
 <textarea className="form-control" value={blog.description}  id="description" onChange={onChange} name="description" placeholder="Blog Description Here" rows="3" required minLength={6}></textarea>
</div>
<button type="button" className="btn btn-primary" id="upload" onClick={onClick} >Upload</button>

</div>



   </div>
  )
}







