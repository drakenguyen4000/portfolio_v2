import React from "react";

const Navbar = () => {
  
  return (
    <div className="container">
      <nav id="mainnavbar" className="navbar">
        <span className="burger-nav"><i className="fas fa-bars"></i></span>
        <ul className="nav">
          <li><a href="#home" className="js--scroll-to-home"><i class="fa-sharp fa-solid fa-house"></i> Home</a></li>
          <li><a href="#about" className="js--scroll-to-about"><i class="fa-solid fa-user"></i> About</a></li>
          <li><a href="#skills" className="js--scroll-to-skills"><i class="fa-solid fa-book"></i> Skills</a></li>
          <li><a href="#projects" className="js--scroll-to-projects"><i class="fa-solid fa-flask"></i> Projects</a></li>
          <li><a href="#contact" className="js--scroll-to-contact"><i class="fa-solid fa-address-book"></i> Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
