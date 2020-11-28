import React from "react";

const About = (props) => {
  if (props.data) {
    var { paragraph1, paragraph2, paragraph3, paragraph4 } = props.data.bio;
  }

  return (
    <section id="About">
      <h1>About Me</h1>
      <div>{paragraph1}</div>
      <div>{paragraph2}</div>
      <div>{paragraph3}</div>
      <div>{paragraph4}</div>
      <a
        className="download_btn"
        target="_blank"
        rel="noreferrer"
        href="https://drakenguyen4000.github.io/portfolio/7-download/DrakeNguyen-Resume.pdf"
      >
        <i className="fas fa-cloud-download-alt"></i> Download Resume
      </a>
    </section>
  );
};

export default About;
