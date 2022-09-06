import React,{useContext} from 'react'
import { blogContext } from '../Context/BlogContext'

export default function MyBlogitems(props) {
   const {blogs,updateBlog}=props
   const {deleteBlog}=useContext(blogContext)
   
  return (
<>
    
    <div className='col-md-3'  >

<div className="card my-3" id="cardd">
  <div className="card-body"  >
    <h5 className="card-title font h2"  >{blogs.title}</h5>
    <i className="fa-solid edit editDelete fa-trash-can" onClick={()=>{deleteBlog(blogs._id)}}></i>
    <i className="fa-solid mx-3 editUpdate edit fa-pen-to-square" onClick={()=>{updateBlog(blogs)}}></i>
    <p className="card-text my-2 font h3"  >{blogs.description}</p>
  </div>
</div>
      
      
    </div></>
  )
}
