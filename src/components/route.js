import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import React from 'react';
function Fun(){ 
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])



  return(
    <RouterProvider router={router}/>
    
  )
}
export default Fun;