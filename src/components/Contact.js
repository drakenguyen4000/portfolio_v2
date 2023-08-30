import React from "react";
import { HashLink } from 'react-router-hash-link';


const Contact = (props) => {
  if (props.data) {
    var { contactmessage } = props.data;
    var { email } = props.data;
    var { resumelink } = props.data;
    var { socialmedia } = props.data;
  }

  const socialMedia = (socialmedia) => {
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
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-wrapper">
        <div className="left-container">
          <div className="contact-message">{contactmessage}</div>
        </div>
        <div className="right-container">
          <span className="social-media">{socialMedia(socialmedia)}</span>
          <div className="contact-btn">
            <div id="slide-1"></div>
            <a href={`mailto:${email}`}>
              <i className="fas fa-envelope-open-text"></i> Message Me
            </a>
          </div>
          <div className="download-btn">
            <div id="slide-2"></div>
            <a target="_blank" rel="noreferrer" href={`${resumelink}`}>
              <i className="fas fa-cloud-download-alt"></i> View Resume
            </a>
          </div>
        </div>
      </div>
      <HashLink to="#home" smooth>
        <i className="fas fa-caret-square-up"></i>
      </HashLink>
    </section>
  );
};

export default Contact;
