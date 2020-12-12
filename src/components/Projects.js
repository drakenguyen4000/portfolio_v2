import React from "react";

const Projects = (props) => {
  if (props.data) {
    var projects = props.data;
  }

  const list = (project) => {
    if (project) {
      return project.map((item, i) => {
        return (
          <div key={i} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={`${item.image}`}
                  alt="project"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="flip-card-front-banner">
                  <h4>{item.title}</h4>
                  <i className="fas fa-mouse-pointer"></i>
                </div>
              </div>
              <div className="flip-card-back">
                <h4>{item.blurb}</h4>
                <p>{item.summary}</p>
                <p>{item.stack}</p>
                <div>
                  <a href={`${item.url}`}>Site</a>
                  <a href={`${item.code}`}>Code</a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <section id="Projects" className="js--sections-projects">
      <h2>Projects</h2>
      <span className="js--wp-projects">{list(projects)}</span>
    </section>
  );
};

export default Projects;
