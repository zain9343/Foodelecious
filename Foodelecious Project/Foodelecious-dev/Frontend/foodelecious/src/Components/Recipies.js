import React, { useState } from 'react'
import bg from "../images/production ID_5106779.mp4"
const axios=require("axios")

export default function Recipies() {

  const [ingredients,setIngredients]=useState("")
  const [recipe,setrecipe]=useState([])


  let url=`https://api.edamam.com/search?q=${ingredients}&app_id=4c903da6&app_key=
  7082b869bba0e77c59dcbb487f619dbc`

  async function getRecipe(){
console.log("inside")
console.log(ingredients)
    var result= await axios.get(url)
    setrecipe(result.data.hits)
    



  }


  return (

    <>
   <video autoPlay loop muted style={{position:"fixed",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-1"}}>
    <source src={bg} type="video/mp4" />
  </video>

<div>


  
</div>




    <div className='container'>
      

      <nav className=" navbar-light bg-lite w-60 my-5" >
  <div className="container-fluid  " id="recepiesearch">
    <form className="d-flex" onSubmit={(e)=>{
      
      e.preventDefault()
      getRecipe()
    
      
    
    
    }}>
    <input className="form-control me-2"  type="search" placeholder="Search" id="searchh" onChange={(e)=>{setIngredients(e.target.value)}} aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>

<div className='row'>
    {recipe.map((r)=>{


return (
  
 
  <div className='col-md-4'>

<div className="card my-3" id="cardd">
<img src={r["recipe"]["image"]} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font h1">{r["recipe"]["label"]}</h5>
    <p className="card-text my-2 font h3">{r["recipe"]["source"]}</p>
    <a id="recepsearch" href={r["recipe"]["url"]} class="btn btn-primary">Recipe</a>

  </div>
</div>
      
      
    </div>
  
    )
    


})}
   </div>




    
    </>
  )
}
