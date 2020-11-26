import React from "react";

const Skills = (props) => {
  if (props.data) {
    var front_end = props.data.frontend;
    var back_end = props.data.backend;
    var technical = props.data.technical;
  }
  const skill = (list) => {
    if (list) {
      return list.map((item) => {
        return <li key={item}>{item}</li>;
      });
    }
  };

  return (
    <section id="Skills">
      <div>
        <ul>{skill(front_end)}</ul>
      </div>
      <div>{<ul>{skill(back_end)}</ul>}</div>
      <div>
        <ul>{skill(technical)}</ul>
      </div>
    </section>
  );
};

export default Skills;
