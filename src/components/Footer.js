import React from "react";

const Footer = (props) => {
  if (props.data) {
    var socialmedia = props.data.social;
    var name = props.data.name;
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
    <footer>
      <div>{footer(socialmedia)}</div>
      <div>{name}</div>
    </footer>
  );
};

export default Footer;
