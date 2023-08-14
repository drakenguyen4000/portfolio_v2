import React from "react";

const Skills = (props) => {
  if (props.data) {
    var { language, skills, tools } = props.data;
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
    <div className="skills-wrapper">
    <section id="Skills" className="js--sections-skills">
        <div className="skills-panels-group">
          <h2>Web Development Skills</h2>
          <span className="js--wp-skills-1 skills-panel panel-1">
            <h3>
              <span className="skills-title">Lang/Framework/Library</span>
            </h3>
            <ul>{skill(language)}</ul>
          </span>
          <span className="js--wp-skills-2 skills-panel panel-2">
            <h3>
              <span className="skills-title">Technical Skills</span>
            </h3>
            {<ul>{skill(skills)}</ul>}
          </span>
          <span className="js--wp-skills-3 skills-panel panel-3">
            <h3>
              <span className="skills-title">Tools</span>
            </h3>
            <ul>{skill(tools)}</ul>
          </span>
        </div>
    </section>
    </div>
  );
};

export default Skills;
