import React,{ useContext } from 'react'
import logo from "../images/logo.png"
import { useLocation,Link,useNavigate } from 'react-router-dom'
import { blogContext } from '../Context/BlogContext'

export default function Navbar() {
let {user}=useContext(blogContext)
const navigate=useNavigate()
const logout=()=>{

sessionStorage.removeItem("token")
navigate("/login")


}
let location=useLocation
  return (
   
      <nav className="navbar navbar-expand-lg navbar-dark" id="navgbar">
  <div className="container-fluid">
  <img src={logo} alt="" width="60" height="60"/>
    <Link className="navbar-brand fs-1 navv " to="/">Foodelicious</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?"active" : "" }`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/blogs'?"active" : "" }`}  to="/blogs">Blogs</Link>
        </li>
        
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/recipies'?"active" : "" }`}  to="/recipies">Recipes</Link>
        </li>
        

      </ul>

      {!sessionStorage.getItem("token")?<div><Link className="btn btn-primary mx-1" id="nav-login"  to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1"   to="/signup" id="nav-signup" role="button">SinUp</Link></div>:<><p className="navbar-brand" style={{fontSize:"15px",marginRight:"2%"}}><i className="fa-solid fa-user mx-5 my-2"></i><br/>{user.name}</p><button type="button" id="nav-logout" className="btn btn-primary" onClick={logout}  >Logout</button></>
}

      
    </div>
  </div>
</nav>
    
  )
}
