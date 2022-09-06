import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import bg from "../images/video (27).mp4"

export default function SignUp() {

    const [credentials,setCredentials]=useState({name:"",email:"",password:""})
    const host="http://localhost:5000"
    let navigate=useNavigate()


    const onChange=(e)=>{

        setCredentials({...credentials,[e.target.name]:e.target.value})
        }

    const submit=async(e)=>{
            e.preventDefault()
            const response = await fetch(`${host}/user/signup`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}) 
            
              });
              const json=await response.json()
              if(json){
                  navigate("/login")
            
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
  <h1 className='font' style={{color:"white",fontSize:"100px",marginLeft:"40%",marginTop:"2%"}}>Foodelecious</h1>

    <div className='container' style={{marginLeft:"28%",marginTop:"-1%"}}>
<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label font h2" id="e-name">Name</label>
    <input type="text" className="form-control w-50" required placeholder='name' name='name'  minLength={3} id="name" aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label font h2" id="e-adress">Email</label>
    <input type="email" className="form-control w-50" id="email" required placeholder='email@gmail.com' name='email' onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" id="pwd" className="form-label font h2">Password</label>
    <input type="password" placeholder='*******************' required className="form-control w-50" id="password" name='password' minLength={5} onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary" id="signupp">SignUp</button>
</form></div></>
  )
}
