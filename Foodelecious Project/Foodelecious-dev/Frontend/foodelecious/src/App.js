import './App.css';
import Navbar from "./Components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Recipies from './Components/Recipies';
import BlogContextProvider from './Context/BlogContext';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AllBlogs from './Components/AllBlogs';
import bg from "./images/video (27).mp4"
function App() {
  return (
    <>
    

 <BrowserRouter>
 <BlogContextProvider>
   
 <Navbar/>
 <Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/recipies' element={<Recipies/>}></Route>
<Route path='/login' exact element={<Login/>}></Route>
<Route path='/signup' exact element={<SignUp/>}></Route>
<Route path='/blogs' exact element={<AllBlogs/>}></Route>


 </Routes>

 </BlogContextProvider>
 </BrowserRouter>

   

 
    </>
  );
}

export default App;
