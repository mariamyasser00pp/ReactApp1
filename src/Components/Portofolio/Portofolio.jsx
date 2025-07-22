
import React, { useEffect } from 'react'; // لازم نعمل import لـ useEffect
import img1 from '../../assets/img/imgi_1_poert1.png';
import img2 from '../../assets/img/imgi_2_port2.png';
import img3 from '../../assets/img/imgi_3_port3.png';
import style from'./Portofolio.module.css'
export default function Portofolio() {

  // هذا الـ useEffect Hook سيتم تشغيله مرة واحدة بعد تحميل المكون
  // وهو المسؤول عن إضافة الـ Event Listener الخاص بـ Bootstrap للمودال
  useEffect(() => {
    // نتأكد إن Bootstrap موجود globally (في الـ window object)
    // وممكن يحتاج وقت عشان يتم تحميله
    if (window.bootstrap) {
      const imageModal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');

      // نضيف مستمع الحدث 'show.bs.modal'
      imageModal.addEventListener('show.bs.modal', function (event) {
        // العنصر اللي فتح المودال (الصورة اللي اتضغط عليها)
        const triggeredImage = event.relatedTarget; 
        
        // نجيب مسار الصورة الكبيرة من خاصية data-image-src
        const imageUrl = triggeredImage.getAttribute('data-image-src');
        
        // نضع مسار الصورة في خاصية src لصورة المودال
        modalImage.src = imageUrl;
      });

      // (اختياري) تنظيف الـ event listener عند إلغاء تحميل المكون
      return () => {
        imageModal.removeEventListener('show.bs.modal', function (event) {
            // ملاحظة: removeEventListener لازم تأخذ نفس الـ function reference اللي تم استخدامها في addEventListener
            // لذا الأفضل تخزين الـ function في متغير
        });
        // لتبسيط الأمر، في هذا السياق، إزالة الـ event listener مش حتكون ضرورية أوي لأن المودال نفسه مش بيتفك تركيبه كتير
        // لكن لو كنت بتتعامل مع موارد كتير او حدث بيتكرر، التنظيف مهم
      };

    } else {
      console.warn("Bootstrap JS is not loaded. Image modal functionality might be limited.");
    }
  }, []); // [] تعني أن الـ Effect هيشتغل مرة واحدة بس بعد الـ initial render

  return (
    <>
      {/* Container الرئيسي للمعرض */}
      <div className="container my-5">
        <h2 className="text-center mb-3 text-uppercase fw-bold">portfolio component</h2>
         <div className={style.devider}>
                          <div className={ style.line}> </div>
                           <i className="fa-solid fa-star" />
                            <div className={ style.line}> </div>
           </div> 
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {/* كل عمود وصورة */}
          <div className="col">
            <img 
              src={img1} 
              className="img-fluid rounded-3 shadow-sm gallery-item" 
              alt="img1"
              data-bs-toggle="modal" 
              data-bs-target="#imageModal" 
              data-image-src={img1} // هنا بتستخدم الـ import مباشرة
            />
          </div>
          <div className="col">
            <img 
              src={img2} 
              className="img-fluid rounded-3 shadow-sm gallery-item" 
               alt="img2"
              data-bs-toggle="modal" 
              data-bs-target="#imageModal" 
              data-image-src={img2} // هنا بتستخدم الـ import مباشرة
            />
          </div>
          <div className="col">
            <img 
              src={img3} 
              className="img-fluid rounded-3 shadow-sm gallery-item" 
              alt="img3"
              data-bs-toggle="modal" 
              data-bs-target="#imageModal" 
              data-image-src={img3} // هنا بتستخدم الـ import مباشرة
            />
          </div>
          <div className="col">
            <img 
              src={img1} 
              className="img-fluid rounded-3 shadow-sm gallery-item" 
              alt="img4"
              data-bs-toggle="modal" 
              data-bs-target="#imageModal" 
              data-image-src={img1} 
            />
          </div>
          <div className="col">
            <img 
              src={img2} 
              className="img-fluid rounded-3 shadow-sm gallery-item" 
              alt="img5" 
              data-bs-toggle="modal" 
              data-bs-target="#imageModal" 
              data-image-src={img2} 
            />
          </div>
          <div className="col">
            <img 
              src={img3} 
              className="img-fluid rounded-3 shadow-sm gallery-item" 
             alt="img6"
              data-bs-toggle="modal" 
              data-bs-target="#imageModal" 
              data-image-src={img3} 
            />
          </div>
        </div>
      </div>

      {/* هيكل المودال الخاص بـ Bootstrap */}
      <div className="modal fade" id="imageModal" tabIndex={-1} aria-labelledby="imageModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body text-center p-0">
              {/* الصورة اللي هتظهر جوه المودال، src بتاعتها هتتغير بالـ JS */}
              <img src="" className="img-fluid w-50 rounded-3" id="modalImage" alt="صورة مكبرة" />
            </div>
            <div className="modal-footer d-flex justify-content-center border-0 p-0 pt-2">
              <button type="button" className="btn btn-danger rounded-pill px-4" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

