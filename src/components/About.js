import React from "react";

const About = (props) => {
  if (props.data) {
    var { paragraph1, paragraph2, paragraph3, paragraph4 } = props.data.bio;
  }

  return (
    <section id="About">
        <h2>About Me</h2>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
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
