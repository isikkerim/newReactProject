import React from "react";
import "./Css/Navbar.css"


 function Navbar (){

   return(
    <div >

<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand d-lg-none d-xxl-none" href="/#">Açılır menü</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" href="/">Ana Sayfa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">film listesi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">kategoriler</a>
        </li>
        <li className="nav-item  dropdown">
        <a className="nav-link active dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Açılır menü
          </a>
          <ul className="dropdown-menu bg-light  ">
            <li><a className="dropdown-item text-dark" href="/#">menü1</a></li>
            <li><a className="dropdown-item text-dark" href="/#">menü2</a></li>
            <li><a className="dropdown-item text-dark" href="/#">menü3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
    );
}
export default Navbar;