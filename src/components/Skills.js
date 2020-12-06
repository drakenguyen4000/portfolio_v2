import React from "react";

const Skills = (props) => {
  if (props.data) {
    var { frontend, backend, technical } = props.data;
  }
  const skill = (list) => {
    if (list) {
      return list.map((item, i) => {
        return (
          <li key={i}>
            <i className="fas fa-circle-notch"></i> {item}
            <hr />
          </li>
        );
      });
    }
  };

  return (
    <section id="Skills" className="js--sections-skills">
        <h2>Web Development Skills</h2>
        <div>
          <span className="js--wp-skills-1">
            <h3>
              <span>Front-End</span>
            </h3>
            <ul>{skill(frontend)}</ul>
          </span>
          <span className="js--wp-skills-2">
            <h3>
              <span>Back-End</span>
            </h3>
            {<ul>{skill(backend)}</ul>}
          </span>
          <span className="js--wp-skills-3">
            <h3>
              <span>Technical</span>
            </h3>
            <ul>{skill(technical)}</ul>
          </span>
        </div>
    </section>
  );
};

export default Skills;
