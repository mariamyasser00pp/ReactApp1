// import React, { useState } from 'react'
// import About from './../About/About';

// export default function Contact() {
//   // const [ count, setCount] = useState(20)
//   // const [user, setUser] = useState("mostafa")
//   // const [userdetails, setuserDetails] = useState({fname:"Laya", lname:"mostafa"})
//   const [products, setproduct] = useState([
//     { id:1, name:"samsung" , price:3000 , sale:true} ,
//     { id:2, name:"samsung" , price:3000 , sale:true } ,
//     { id:3, name:"samsung" , price:3000 , sale:false } ,
//     { id:4, name:"samsung" , price:3000 , sale:true } ,
//     { id:5, name:"samsung" , price:3000 , sale:false } ,
//   ])
//   function updateProduct() {
//     console.log("update");
    
//   }
//   // function Change(){
//   //   // setCount(count+1)
//   //   setCount(Math.round(Math.random()*100))
//   // }
//   return (
//   <>
//   <div>
//     <h1 >contact </h1>
//     {/* <button  onClick={Change} className='btn btn-danger'>Click here</button>
//      <p className={ count > 50 ? "bg-danger" : "bg-success"}>count: {count}</p> */}
   
//      {/* <About x={user} y={userdetails} /> */}
//      <div className="container">
//       <div className="row g-4">
//         {/* <About products ={products[0]}/> */}
//        {products.map(function(current){
//         return <About product={current}   update={updateProduct} />
//        })}
//       </div>
//      </div>

//   </div>

//   </>
//   )
// }

import React from 'react'
import style from'./Contact.module.css'
export default function Contact() {
  return (
   <div className="container py-5"> {/* py-5 بيضيف مسافة داخلية من فوق وتحت */}
      <h2 className="text-center text-dark fs-1 text-capitalize fw-bold p-4">contact section</h2>
            <div className={style.devider}>
                  <div className={ style.line}> </div>
                   <i className="fa-solid fa-star" />
                    <div className={ style.line}> </div>
                </div> {/* text-center عشان العنوان ييجي في النص */}

      <div className="row justify-content-center pt-5 "> {/* هنا الـ row بيحتوي الفورم وبيوسطها */}
        <div className="col-md-6"> {/* هنا بنحدد عرض الفورم (6 أعمدة) */}
          <form>
<div className="form-floating mb-3">
  <input type="text" oninput="Validation ()" className="form-control   " name="productName" id="productName" placeholder="name@example.com" />
  <label htmlFor="productName">UserName:</label>
 
</div>
<div className="form-floating mb-3">
  <input type="number" className="form-control " name="productprice" id="productprice" placeholder="Password" />
  <label htmlFor="productprice">UserAge:</label>
</div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {/* ممكن تضيف زرار للإرسال هنا */}
            <button type="submit" className="btn btn-primary  ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
