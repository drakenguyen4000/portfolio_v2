import React from "react";

const About = (props) => {
  if (props.data) {
    var { paragraph1 } = props.data.bio;
  }

  return (
    <section id="About" className="js--sections-about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="js--wp-about">
          <p>{paragraph1}</p>
        </div>
        <div className="js--wp-about-pic about-container-pic">
          <img className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default About;