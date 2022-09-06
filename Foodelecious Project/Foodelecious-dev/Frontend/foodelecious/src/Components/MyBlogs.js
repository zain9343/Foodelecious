import React, { useEffect,useRef,useContext,useState } from 'react'
import { useNavigate } from "react-router-dom"
import { blogContext } from '../Context/BlogContext'
import AddBlog from './AddBlog'
import MyBlogitems from './MyBlogitems'

export default function MyBlogs() {
    let navigate=useNavigate()

    const {blogs,getBlog,editBlog}=useContext(blogContext)
    const [blog,setblog]=useState({id:"",etitle:"",edescription:""})
useEffect(()=>{
if(sessionStorage.getItem('token')){

getBlog()}
else{
  navigate("/login")
}

},[])

const updateBlog=(currentblog)=>{

ref.current.click()
setblog({id:currentblog._id,etitle:currentblog.title,edescription:currentblog.description})


}
const ref=useRef(null)
const refClose=useRef(null)
const onChange=(e)=>{

  setblog({...blog,[e.target.name]:e.target.value})
      
 
  
  }

  
  const onClick=(e)=>{
      e.preventDefault()
      editBlog(blog.id,blog.etitle,blog.edescription)
      refClose.current.click()
  
  }

  return (
<>


    
    <AddBlog></AddBlog>
    
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div className="modal-dialog" >
    <div className="modal-content" id="modall">
      <div className="modal-header">
        <h3 className="modal-title font h1" id="exampleModalLabel">Edit / Update Blog</h3>
        <button type="button" className="btn-close" style={{backgroundColor:"white"}} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='container blogForm my-5'>
      
      <div className="mb-3  ">
          <div className="container ">
   
    <label htmlFor="For inserting the blog title" className="form-label h2 font" >Title</label></div>
    <input type="text" className="form-control w-50" onChange={onChange}  id="title" value={blog.etitle} name="etitle" placeholder="Blog Title Here" required minLength={3}/>
   </div>
   <div className="mb-3">
      
   <div className="container h2 font"> <label htmlFor="For inserting the blog description" className="form-label"  >Description</label></div>
    <textarea className="form-control" id="description" onChange={onChange} name="edescription" placeholder="Blog Description Here" rows="3" value={blog.edescription}  required minLength={6}></textarea>
   </div>
  
   
   </div>
   
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose}  className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={onClick} className="btn btn-primary" id="update">Update</button>
      </div>
    </div>
  </div>
</div>
   
    <div className='row'>

{blogs.map((b)=>{


return <MyBlogitems key={b._id} updateBlog={updateBlog} blogs={b} ></MyBlogitems>

})}


      
    </div>
    </>
  )
}
