import React from "react";

const Footer = (props) => {
  if (props.data) {
    var { name } = props.data;
  }

  return (
    <footer id="Footer">
      <div>&copy; 2021 Designed by {name}</div>
    </footer>
  );
};

export default Footer;
