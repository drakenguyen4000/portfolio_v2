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
              {/* <div> */}
              <h4>{item.title}</h4>
              {/* <i className="fas fa-mouse-pointer"></i> */}
              {/* </div> */}
              <p>{item.blurb}</p>
              <p>{item.summary}</p>
              <p>{item.stack}</p>
              <div>
                <a target="_blank" href={`${item.url}`}>
                  Site
                </a>
                <a target="_blank" href={`${item.code}`}>
                  Code
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src={`${item.image}`} alt="project-image" />
            </div>
          </div>
        );
      });
    }
  };

  return (
    <section id="Projects" className="js--sections-projects">
      <h2>Projects</h2>
      <div className="js--wp-projects">{list(projects)}</div>
    </section>
  );
};

export default Projects;
