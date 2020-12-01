import React from "react";

const Contact = (props) => {
  if (props.data) {
    var { contactmessage } = props.data;
  }
  return (
    <section id="Contact">
      <div className="container">
        <h1>Contact</h1>
        <div>{contactmessage}</div>
        {/* <button className="contact-button">
        <a href="mailto:drakeknguyen@yahoo.com">Message Me</a>
      </button> */}
        <a
          className="contact-button"
          // target="_blank"
          // rel="noreferrer"
          href="mailto:drakeknguyen@yahoo.com"
        >
          {/* <i className="fas fa-cloud-download-alt"></i>  */}
          Message Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
