import React from "react";
import Navbar from "../components/Navbar";

const Header = (props) => {
  if (props.data) {
    var name = props.data.name
  }
  return (
    <section id="Header">
      <Navbar />
      <div>Hi! I'm {name}.</div>
    </section>
  );
};

export default Header;
