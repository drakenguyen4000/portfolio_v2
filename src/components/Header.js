import React from "react";
import Navbar from "../components/Navbar";

const Header = (props) => {
  if (props.data) {
    var name = props.data.greeting;
    var title = props.data.title;
  }

  return (
    <div>
      <Navbar />
      <section id="Home" className="js--sections-home">
        <div className="intro-container">
          <p className="js--wp-home greeting">{name}</p>
          <span className="dev-title">{title}</span>
          <a href="#About" className="js--scroll-to-about chevron-button">
            <i className="fas fa-chevron-circle-down"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
