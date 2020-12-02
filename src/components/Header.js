import React from "react";
import Navbar from "../components/Navbar";

const Header = (props) => {
  if (props.data) {
    var name = props.data.name
  }
  return (
    <div>
      <Navbar />
      <section id="Header" className="js--sections-home">
      <div>Hi! I'm {name}.</div>
    </section>
    </div>
  );
};

export default Header;
