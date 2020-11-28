import React from "react";

const Projects = (props) => {
  if (props.data) {
    var projects = props.data;
  }
  const list = (project) => {
    if (project) {
      return project.map((item, i) => {
        return (
          <ul className="project_item" key={i}>
            <li>
              <h4>{item.title}</h4>
            </li>
            <li>
              <img src={`${item.image}`} alt="project" />
            </li>
            <li>{item.blurb}</li>
            <li>{item.url}</li>
            <li>{item.summary}</li>
            <li>{item.stack}</li>
          </ul>
        );
      });
    }
  };
  return (
    <section id="Projects">
      <h1>Projects</h1>
      <div>
        <span>{list(projects)}</span>
      </div>
    </section>
  );
};

export default Projects;
