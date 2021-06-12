import React from "react";

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
    <section id="Contact" className="js--sections-contact">
      <h2>Contact</h2>
      <div className="contact-wrapper">
        <div className="left-container">
          <div className="contact-message">{contactmessage}</div>
        </div>
        <div className="right-container">
          <span className="social-media">{socialMedia(socialmedia)}</span>
          <a className="contact-btn" href={`mailto:${email}`}>
            <i className="fas fa-envelope-open-text"></i> Message Me
          </a>
          <a
            className="download_btn"
            target="_blank"
            rel="noreferrer"
            href={`${resumelink}`}
          >
            <i className="fas fa-cloud-download-alt"></i> View Resume
          </a>
        </div>
      </div>
      <a href="#home" className="js--scroll-to-home">
        <i className="fas fa-caret-square-up"></i>
      </a>
    </section>
  );
};

export default Contact;
