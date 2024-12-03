import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills">
      <div className="skills-header">
        <h1>What I Know </h1>
        <p>
          With a strong foundation in modern technologies, I bring innovative solutions to the table, tailored to your needs.
        </p>
      </div>
      <div className="skills-container">
        <div className="skill">
        <img
            src="https://media.licdn.com/dms/image/v2/D5612AQGdi77S5VJa6w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1718429090603?e=2147483647&v=beta&t=eabf24yvZ8JQa9CIGSmJlXq53BPuzFffClyQ7CZr67o" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3>Cloud Computing</h3>
          <p>
            Skilled in deploying and managing scalable solutions using AWS, Microsoft Azure, and Google Cloud Platform.
          </p>
        </div>
        <div className="skill">
        <img
            src="https://cdn-icons-png.flaticon.com/512/8522/8522214.png" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3>Computer Networks & Security</h3>
          <p>
            Proficient in securing systems and networks with expertise in firewalls, encryption, and vulnerability mitigation.
          </p>
        </div>
        <div className="skill">
        <img
            src="https://ezitech.org/blogs/wp-content/uploads/2023/12/0_l97vC1QkxR8Sivxt.webp" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3>Java</h3>
          <p>
            Extensive experience in building applications with Java, focusing on Object-Oriented Programming and robust backend systems.
          </p>
        </div>
        <div className="skill">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3>React</h3>
          <p>
            Skilled in creating dynamic and responsive web applications using React and its ecosystem.
          </p>
        </div>
        <div className="skill">
        <img
            src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fskill_page%2F36894%2Flogo%2Foptimized%2Fsql-64a6e0f07773cf17581e76ca09e17dbc.png" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3>Databases</h3>
          <p>
          Proficient in Oracle RDBMS, SQL Server, MySQL, and MongoDB, with experience in designing, querying, and managing databases to optimize performance and support data-driven solutions
          </p>
        </div>
        <div className="skill">
        <img
            src="https://www.10bestdesign.com/blog/content/images/2018/03/20.png" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3>Web Development</h3>
          <p>
          Skilled in JavaScript, JQuery, PHP, TypeScript, and Node.js, with expertise in building dynamic web applications, enhancing interactivity, and creating efficient backend solutions.
          </p>
        </div>
        <div className="skill">
        <img
            src="https://download.logo.wine/logo/Linux/Linux-Logo.wine.png" // Replace with your image
            alt="Systems Icon"
            className="skill-icon"
          />
          <h3> Systems</h3>
          <p>
          Experienced in macOS, Windows, and Linux, with a strong ability to navigate, configure, and troubleshoot across diverse operating systems to support both development and deployment environment
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Skills;
