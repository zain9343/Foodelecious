import React, { useEffect,useRef,useContext,useState } from 'react'
import { useNavigate } from "react-router-dom"
import { blogContext } from '../Context/BlogContext'
import bg from "../images/video (34).mp4"

export default function AllBlogs() {
    const {allBlogs,getBlogs}=useContext(blogContext)
    useEffect(()=>{
        
        
        getBlogs()
        
        },[])


  return (
      <>
    <video autoPlay loop muted style={{position:"fixed",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"}}>
    <source src={bg} type="video/mp4" />
  </video>
    <div className='row'>
      {allBlogs.map((b)=>{


return (    <div className='col-md-3'>

<div className="card my-3" id="cardd">
  <div className="card-body">
    <h5 className="card-title font h2">{b.title}</h5>
   
    <p className="card-text my-2 font h3">{b.description}</p>
  </div>
</div>
      
      
    </div>)

})}
    </div></>
  )
}
