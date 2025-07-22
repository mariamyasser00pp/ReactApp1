// import React from 'react'

// export default function About({product , update}) {
//   let {id , name , price ,sale  }=product;
//         //pros ده object     ==شايل كل حاجه مبعتالى من ال =component التان
//   return (
    
    
//     <>
         
//           <div className="col-md-3">
//             <div className="item bg-secondary text-white p-3 rounded-3 text-center position-relative">
//               <h1 >id : {id}</h1>
//               <h2>name: {name}</h2>
//               <h3>price : {price}</h3>
//               <h4>sale : {sale}</h4>
//               <button onClick={() => updateProduct()} className='btn btn-danger rounded-1 w-100'>Updata <i className="fa-solid fa-pen"></i></button>
//               { sale == true ? <div className="bg-danger position-absolute top-0 end-0 p-2 rounded-1">Sale</div> :null}
              
//           </div>
//          </div>
//      {/* <div>About
//       <h2 className='bg-primary text-black'>name: {x}</h2>
//       <h3>fname {y.fname}</h3>
//       <h4>lname {y.lname} </h4>
//     </div> */}
//     </>
   
//   )
// }
import React from 'react';
import img from '../../assets/img/reactjs.png';
import style from'./About.module.css'
export default function About() {
  return (
    <>
      <div className='bg-info  p-5 '>
        <div className="container   pe-4 text-white rounded-3 " >
          <div className="row align-items-center">
            <div className="col-md-6">
              <div >
                <h2 className="mb-3 text-center  text-capitalize">
                 about component
                </h2>
                <div className="d-flex justify-content-center align-items-center">
                  <div className={ style.line}> </div>
                   <i className="fa-solid fa-star" />
                    <div className={ style.line}> </div>
                </div>
                <div className='mt-2'>
                  <p >
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                  <p >
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={img} className='w-75 d-flex justify-content-center align-items-center ' alt="صورة توضيحية لقسم عني" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}