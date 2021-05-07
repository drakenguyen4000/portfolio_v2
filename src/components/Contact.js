import React from "react";

const Contact = (props) => {
  if (props.data) {
    var { contactmessage } = props.data;
    var { email } = props.data;
  }

  return (
    <section id="Contact" className="js--sections-contact">
      <div className="contact-wrapper">
        <h2>Contact</h2>
        <div className="contact-message">{contactmessage}</div>
        <div>
          <a className="contact-btn" href={`mailto:${email}`}>
            <i className="fas fa-envelope-open-text"></i> Message Me
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
