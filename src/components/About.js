import React from "react";

const About = (props) => {
  if (props.data) {
    var { paragraph1, paragraph2, paragraph3, paragraph4 } = props.data.bio;
    var { resumelink } = props.data;
  }

  return (
    <section id="About" className="js--sections-about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="js--wp-about">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <p>{paragraph4}</p>
        </div>
        <div className="about-container-2">
          <img className="profile-pic" />
          <a
            className="download_btn"
            target="_blank"
            rel="noreferrer"
            href={`${resumelink}`}
          >
            <i className="fas fa-cloud-download-alt"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
