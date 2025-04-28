import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Memory Card Game",
      description:
        "A fun memory matching card game built with React to improve concentration and memory skills.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://memory-card-game-olive-mu.vercel.app/",
    },
    {
      title: "Dictionary Website",
      description:
        "A website that allows users to find word definitions and synonyms, using real-time language data from an API.",
      technologies: ["React", "Node.js", "CSS"],
      link: "https://finalproject-app.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects I've Built</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
