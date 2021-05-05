import React from "react";

const Footer = (props) => {
  if (props.data) {
    var { socialmedia } = props.data;
    var { name } = props.data;
  }

  const footer = (socialmedia) => {
    if (socialmedia) {
      return socialmedia.map((el, i) => {
        return (
          <a key={i} href={`${el.url}`}>
            <i className={`${el.className}`}></i>
          </a>
        );
      });
    }
  };

  return (
    <footer id="Footer">
      <div>{footer(socialmedia)}</div>
      <div>&copy; 2021 Designed by {name}</div>
    </footer>
  );
};

export default Footer;
