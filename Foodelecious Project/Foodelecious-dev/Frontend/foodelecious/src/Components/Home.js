import React from 'react'

import MyBlogs from './MyBlogs'
import bg from "../images/production ID_4686879 (2).mp4"


export default function Home() {


  return (
      <>
       <video autoPlay loop muted style={{position:"fixed",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"}}>
    <source src={bg} type="video/mp4" />
  </video>
    <div className='container'>
    <MyBlogs></MyBlogs>
    </div>
    </>



  )
}
