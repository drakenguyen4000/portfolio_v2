import React from "react";

const Footer = (props) => {
  if (props.data) {
    var { socialmedia } = props.data;
    var { name } = props.data;
  }

  const footer = (socialmedia) => {
    if (socialmedia) {
      return socialmedia.map((el) => {
        return (
          <a href={`${el.url}`}>
            <i className={`${el.className}`}></i>
          </a>
        );
      });
    }
  };

  return (
    <footer id="Footer">
      <div>{footer(socialmedia)}</div>
      <div>&copy; 2020 Designed by {name}</div>
    </footer>
  );
};

export default Footer;
