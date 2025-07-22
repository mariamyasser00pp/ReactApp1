import React from 'react'
import './Footer.module.css'
export default function Footer() {
  return (
  <>
  <footer >
      <div className='container'>
       <div className="row text-white p-4">
        <div className="col-md-4 text-center">
          <h4 className='mb-3 text-info'>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <h6>Clark, MO 65243</h6>
        </div>
        <div className="col-md-4 text-center">
          <h4 className='mb-3 text-info' >AROUND THE WEB</h4>
          <div className="d-flex justify-content-center allgn-item-center mb-3">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-x-twitter"></i>
           <i class="fa-brands fa-linkedin-in"></i>
           <i class="fa-solid fa-globe"></i>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <h4 className='mb-3 text-info'>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
       </div>
       
    </div>
    <p className='text-center bg-dark text-white m-0 p-3'>Copyright © Your Website 2021</p>
  </footer>
  </>
  )
}
