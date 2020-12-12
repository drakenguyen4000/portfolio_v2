import React from "react";

const Navbar = () => {
  
  return (
    <div className="container">
      <nav id="mainnavbar" className="navbar">
        <span className="burger-nav"><i className="fas fa-bars"></i></span>
        <ul className="nav">
          <li><a href="/#" className="js--scroll-to-home">Home</a></li>
          <li><a href="/#" className="js--scroll-to-about">About</a></li>
          <li><a href="/#" className="js--scroll-to-skills">Skills</a></li>
          <li><a href="/#" className="js--scroll-to-projects">Projects</a></li>
          <li><a href="/#" className="js--scroll-to-contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
