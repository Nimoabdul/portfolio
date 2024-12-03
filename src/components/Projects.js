import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Dictionary Website",
      description:
        "The website allows users to find word definitions and synonyms by integrating an API to fetch real-time language data.",
      technologies: ["React", "Node.js", "CSS"],
      link: "https://finalproject-app.vercel.app/",
    },
    {
      title: "Project 2",
      description:
        "Explaination",
      technologies: ["Python", "scikit-learn", "Pandas"],
      link: "https://github.com/Nimoabdul/wine-quality-predictor",

    },
    {
      title: "Project 3",
      description:
        "Explaination",
      technologies: ["Python", "Matplotlib", "Pandas", "Seaborn"],
      link: "https://github.com/Nimoabdul/housing-analysis",
      github: "https://github.com/Nimoabdul/housing-analysis",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">What I've Done</h2>
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
