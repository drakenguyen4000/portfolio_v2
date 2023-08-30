import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  
  return (
    <BrowserRouter>
      <div className="container">
        <div id="mainnavbar" className="navbar">
          <span className="burger-nav"><i className="fas fa-bars"></i></span>
          <ul className="nav">
            <li><HashLink to="#home" smooth><i className="fa-sharp fa-solid fa-house"></i> Home</HashLink></li>
            <li><HashLink to="#about" smooth><i className="fa-solid fa-user"></i> About</HashLink></li>
            <li><HashLink to="#skills" smooth><i className="fa-solid fa-book"></i> Skills</HashLink></li>
            <li><HashLink to="#projects" smooth><i className="fa-solid fa-flask"></i> Projects</HashLink></li>
            <li><HashLink to="#contact" smooth><i className="fa-solid fa-address-book"></i> Contact</HashLink></li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
