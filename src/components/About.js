import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  if (props.data) {
    console.log(props.data.resumelink);
    var { paragraph1, paragraph2, paragraph3, paragraph4 } = props.data.bio;
    // var {resumelink} = props.data;
  }

  return (
    <section id="About">
      <h1>About Me</h1>
      <div>{paragraph1}</div>
      <div>{paragraph2}</div>
      <div>{paragraph3}</div>
      <div>{paragraph4}</div>
      <a
        class="download_btn"
        target="_blank"
        href="https://drakenguyen4000.github.io/portfolio/7-download/DrakeNguyen-Resume.pdf"
      >
        <i class="fas fa-cloud-download-alt"></i> Download Resume
      </a>
    </section>
  );
};

export default About;
