import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Nav/>
      <div className=' '>
         <Outlet></Outlet>
        </div> {/*  nav , footer ,هما ثابتين وال  ==> outlet المتغير وقت التقليب*/}  
     <Footer/> 
    </>
  )
}
