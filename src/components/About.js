import React from "react";

const About = (props) => {
  if (props.data) {
    var { paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6 } =
      props.data.bio;
  }

  return (
    <section id="about">
      <div className="about-container">
        <div className="js--wp-about-pic about-container-pic">
          <img className="profile-pic" src="https://res.cloudinary.com/dkn4000/image/upload/v1692768248/Profile-4-2_eqx4zk.png" alt="profile-pic" />
        </div>
        <div className="js--wp-about about-description">
          <h2>About Me</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <p>{paragraph4}</p>
          <p>{paragraph5}</p>
          <p>{paragraph6}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
