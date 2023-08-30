import React from "react";

const Projects = (props) => {
  if (props.data) {
    var projects = props.data;
  }

  const list = (project) => {
    if (project) {
      return project.map((item, i) => {
        return (
          <div key={i} className="projects-container">
            <div className="project-description-card">
              <h4>{item.title}</h4>
              <p>{item.blurb}</p>
              <p>{item.summary}</p>
              <p>{item.stack}</p>
              <div className="project-links">
                <a target="_blank" href={`${item.url}`}>
                  Live Demo
                </a>
                <a target="_blank" href={`${item.code}`}>
                  Repo
                </a>
              </div>
            </div>
            <a target="_blank" href={`${item.code}`}>
              <img className="project-image" src={`${item.image}`} alt="project-image" />
            </a>
          </div>
        );
      });
    }
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="js--wp-projects">{list(projects)}</div>
    </section>
  );
};

export default Projects;
