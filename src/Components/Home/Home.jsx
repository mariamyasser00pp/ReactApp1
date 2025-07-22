import React from 'react'
import img from '../../assets/img/imgi_1_avataaars.svg'
import style from'./Home.module.css'

export default function Home() {
  return (
  <>
  <div className='d-flex justify-content-center flex-column align-items-center bg-info vh-100 text-white' >
    <img src={img} className='w-50 d-block h-50  mb-2' alt="" />
    <h2 className='fw-bold mb-3'>start Framework</h2>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                  <div className={ style.line}> </div>
                   <i className="fa-solid fa-star" />
                    <div className={ style.line}> </div>
                </div>
    <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </>
  )
}
