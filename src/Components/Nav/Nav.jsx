import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// أنت مش محتاج تعمل import للمكونات هنا (About, Contact, Portofolio)
// لأن الـ Nav بيستخدم المسارات (paths) مش المكونات نفسها

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  p-3">
        <div className="container">
          <Link className="navbar-brand fs-3 text-primary fw-bold" to={'/'}> <i class="fa-brands fa-react"></i> Start Framework</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>  {/* لما ادوس  ع  الكلمه روح حط ف الpath */ }
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/portofolio">Portfolio</NavLink> {/* لاحظ هنا Portofolio بقت Portfolio عشان ماتغلطش */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}