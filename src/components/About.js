import React from "react";

const About = (props) => {
  if (props.data) {
    var { paragraph1, paragraph2, paragraph3, paragraph4, paragraph5 } = props.data.bio;
  }

  return (
    <section id="About" className="js--sections-about">
      <div className="about-container">
      <div className="js--wp-about-pic about-container-pic">
          <img className="profile-pic" />
        </div>
        <div className="js--wp-about">
        <h2>About Me</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <p>{paragraph4}</p>
          <p>{paragraph5}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
