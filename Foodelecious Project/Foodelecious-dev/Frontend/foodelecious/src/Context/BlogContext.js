
import { createContext, useState } from "react";

export const blogContext=createContext()

function BlogContextProvider(props){

    const host="http://localhost:5000"

    const blogContent=[]
    const blogContents=[]
    const [blogs,setBlogs]=useState(blogContent)
    const [user,setUser]=useState({name:"",email:""})
    const [allBlogs,setAllBlogs]=useState(blogContents)

    const getBlog=async()=>{

        const response = await fetch(`${host}/user/getBlog`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token':sessionStorage.getItem('token')
            }
          });
          const json=await response.json()
          setBlogs(json.blogs)
          setUser({name:json.user[0].name,email:json.user[0].email})
    
    
    }
    const getBlogs=async()=>{

      const response = await fetch(`${host}/user/getBlogs`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json=await response.json()
        setAllBlogs(json)
  
  
  }


const addBlog=async(title,description)=>{

    const response = await fetch(`${host}/user/writeBlog`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':sessionStorage.getItem('token')
        },
        body: JSON.stringify({title,description})

      });
      const blog=await response.json()

     setBlogs(blogs.concat(blog))

}

const deleteBlog=async(id)=>{

  const response = await fetch(`${host}/user/delete/${id}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'auth-token':sessionStorage.getItem('token')
    },
  });

const newBlog=blogs.filter((blog)=>{

return blog._id!==id

})
setBlogs(newBlog)


}

const editBlog=async(id,title,description)=>{


    const response = await fetch(`${host}/user/update/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':sessionStorage.getItem('token')
        },
        body: JSON.stringify({title,description}) 
      });

      let newBlog=JSON.parse(JSON.stringify(blogs))

    for (let index = 0; index < newBlog.length; index++) {
        const element = newBlog[index];
        if(element._id===id){
          newBlog[index].title=title
          newBlog[index].description=description
          break;
        }

        }
        setBlogs(newBlog)




   
        
    

}
return(


        <blogContext.Provider value={{blogs,allBlogs,addBlog,deleteBlog,editBlog,getBlog,getBlogs,user}}>

           {props.children}


        </blogContext.Provider>


    )
}

export default BlogContextProvider