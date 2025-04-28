import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Terenet Inc.",
      title: "IT Infrastructure Specialist",
      date: "Jan 2023 - Aug 2023",
      details: [
        "Monitored and responded to incidents using the Remedy 7 ITSM system.",
        "Provided 1st line support for all Data Centre-based systems and applications to established SLAs.",
        "Executed and reported on scheduled tasks for daily operations and systems support.",
        "Led a project to optimize server response time by 25%.",
        "Managed server builds and decommissions, ensuring tasks were executed correctly.",
      ],
    },
    {
      company: "Moxies",
      title: "Server",
      date: "May 2022 - Jan 2023",
      details: [
        "Greeted and seated guests daily, handled reservations and managed customer queries about the restaurant and menu.",
        "Assisted various restaurant staff and used selling techniques to increase sales.",
      ],
    },
    {
      company: "Starbucks",
      title: "Barista",
      date: "Sep 2022 - Jan 2023",
      details: [
        "Welcomed customers, explained specials, accepted orders and payments.",
        "Prepared foods, brewed coffee and tea, served items, and packaged for sale.",
        "Cleaned and restocked work areas, sanitized equipment and utensils.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="section-title-experience">Where I've Worked</h2>
      <div className="experience-container">
        <div className="experience-tabs">
          {experiences.map((job, index) => (
            <button
              key={index}
              className={`experience-tab ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className="experience-content">
          <h3>
            {experiences[activeTab].title}{" "}
            <span className="company">@ {experiences[activeTab].company}</span>
          </h3>
          <p className="experience-date">{experiences[activeTab].date}</p>
          <ul>
            {experiences[activeTab].details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <div className="resume-link-container">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              View My Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
