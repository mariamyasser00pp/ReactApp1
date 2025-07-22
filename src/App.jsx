import { Children, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio'
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound'





function App() {
  
const routers= createBrowserRouter([
  {path: '/' , errorElement:<NotFound/>,  element:<Layout/>
    , children:[
   
  {index:true , element:<Home/>},
  {path: '/about' , element:<About/>},
  {path: '/portofolio' , element:<Portofolio/>},
  {path: '/contact' , element:<Contact/>},
  {path: '*' , element:<NotFound/>},
    ]}

  
])
  return (
    <>
   
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
