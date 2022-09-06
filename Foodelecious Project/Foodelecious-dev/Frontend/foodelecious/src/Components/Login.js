import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import bg from "../images/video (29).mp4"
export default function Login() {
const host="http://localhost:5000"
let navigate=useNavigate()

const [credentials,setCredentials]=useState({email:"",password:""})
const onChange=(e)=>{

    setCredentials({...credentials,[e.target.name]:e.target.value})
        
    
    
    }
const submit=async(e)=>{
e.preventDefault()
const response = await fetch(`${host}/user/login`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({email:credentials.email,password:credentials.password}) 

  });
  const json=await response.json()
  if(json){
    sessionStorage.setItem("token",json)
    navigate("/")

  }
  else{
      alert("Invalid")
  }
}

  return (
    <>
    <video autoPlay loop muted style={{position:"fixed",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"}}>
    <source src={bg} type="video/mp4" />
  </video>
    <div className=' bg1'>
    <div className='container' style={{marginLeft:"28%",marginTop:"8%"}}>
     <h1 className='font' style={{color:"white",fontSize:"100px",marginLeft:"13%",marginTop:"-7%"}}>Foodelecious</h1>
<form onSubmit={submit}>

  <div className="mb-3">
 
    <label htmlFor="email" className="form-label font h2" id="e-adress">Email address</label>
    <input type="email" className="form-control w-50" id="email" aria-describedby="emailHelp" onChange={onChange} name='email' 
    required  placeholder='email@gmail.com' value={credentials.email}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label font h2" id="pwd">Password</label>
    <input type="password" onChange={onChange} className="form-control w-50" id="password" name='password' minLength={5} required placeholder='******************' value={credentials.password}/>
  </div>

  <button type="submit" className="btn btn-primary" id="logbtn" >Submit</button>
</form>    </div>
</div>
</>
  )
}
