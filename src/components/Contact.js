import React from "react";

const Contact = (props) => {
  if (props.data) {
    var { contactmessage } = props.data;
    var { email } = props.data;
  }
  
  return (
    <section id="Contact" className="js--sections-contact">
      <a href="#" className="js--scroll-to-home"><i className="fas fa-caret-square-up"></i></a>
      <div>
        <h2>Contact</h2>
        <div>{contactmessage}</div>
        <a
          className="contact-btn"
          href={`mailto:${email}`}
        >
        <i class="fas fa-envelope-open-text"></i> Message Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
