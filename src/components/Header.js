import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = (props) => {
  if (props.data) {
    var name = props.data.greeting;
    var title = props.data.title;
  }

  return (
    <div>
      <Navbar />
      <section id="home">
        <img className="astronaut" src="/image/astronaut.png" alt="astronaut"></img>
        <div className="intro-container">
          <p className="js--wp-home greeting">{name}</p>
          <span className="dev-title">{title}</span>
          <HashLink to="#about" smooth className="chevron-button">
            <i className="fas fa-chevron-circle-down"></i>
          </HashLink>
        </div>
      </section>
    </div>
  );
};

export default Header;
