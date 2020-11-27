import React from "react";

const Skills = (props) => {
  if (props.data) {
    var { frontend, backend, technical } = props.data;
  }
  const skill = (list) => {
    if (list) {
      return list.map((item) => {
        return <li key={item}><i className="fas fa-circle-notch"></i> {item}<hr/></li>;
      });
    }
  };

  return (
    <section id="Skills">
      <h1>Web Development Skills</h1>
      <div>
        <span>
          <h3>
            <span>Front-End</span>
          </h3>
          <ul>{skill(frontend)}</ul>
        </span>
        <span>
          <h3>
            <span>Back-End</span>
          </h3>
          {<ul>{skill(backend)}</ul>}
        </span>
        <span>
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
