import React from "react";

const Navbar = () => {
  return (
    <nav id="mainnavbar" className="navbar">
      <ul>
        <li><a href="#" className="js--scroll-to-home">Home</a></li>
        <li><a href="#" className="js--scroll-to-about">About</a></li>
        <li><a href="#" className="js--scroll-to-skills">Skills</a></li>
        <li><a href="#" className="js--scroll-to-projects">Projects</a></li>
        <li><a href="#" className="js--scroll-to-contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
