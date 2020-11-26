import React from "react";

const Header = (props) => {
  if (props.data) {
    var name = props.data.name
  }
  return (
    <section id="Header">
      <div>Hi! I'm {name}.</div>
    </section>
  );
};

export default Header;
