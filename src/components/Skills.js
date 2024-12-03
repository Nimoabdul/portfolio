import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <div className="skills-header">
        <h1>What I Know</h1>
        <p>
          With a strong foundation in modern technologies, I bring innovative solutions to the table, tailored to your needs.
        </p>
      </div>
      <div className="skills-container">
        <div className="skill">
          <img 
            src="https://cdn3.emoji.gg/emojis/7253-staff-badge.png" 
            alt="Continuous Support Icon" 
            className="skill-icon" 
          />
          <h3>Continuous Support</h3>
          <p>
          I advance web-based software to keep it efficient and competitive, ensuring quick updates and regular functional module releases.
  
          </p>
        </div>
        <div className="skill">
          <img 
            src="https://cdn-icons-png.flaticon.com/256/470/470651.png" 
            alt="Back-End Development Icon" 
            className="skill-icon" 
          />
          <h3>Back-End Development</h3>
          <p>
          I implement business logic on the back end using proven frameworks and create well-structured APIs for integration with corporate systems.
          </p>
        </div>
        <div className="skill">
          <img 
            src="https://code.visualstudio.com/assets/images/code-stable-white.png" 
            alt="Front-End Design Icon" 
            className="skill-icon" 
          />
          <h3>Front-End Design & Development</h3>
          <p>
          I design UI based on user needs and bring it to life using smart front-end technologies.
          </p>
        </div>
        <div className="skill">
          <img 
            src="https://img.icons8.com/ios7/600w/FFFFFF/artificial-intelligence.png" 
            alt="AI Knowledge Icon" 
            className="skill-icon" 
          />
          <h3>Artificial Intelligence</h3>
          <p>
            I have a strong understanding of AI, using frameworks like TensorFlow and PyTorch to develop machine learning models for predictive analytics and problem-solving.
          </p>
        </div>
      </div>
      <div className="tools-header">
        <h2>Tools</h2>
      </div>
      <div className="tools-container">
        <div className="tool">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQGdi77S5VJa6w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1718429090603?e=2147483647&v=beta&t=eabf24yvZ8JQa9CIGSmJlXq53BPuzFffClyQ7CZr67o" 
            alt="Cloud Computing Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8522/8522214.png" 
            alt="Computer Networks & Security Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://ezitech.org/blogs/wp-content/uploads/2023/12/0_l97vC1QkxR8Sivxt.webp" 
            alt="Java Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png" 
            alt="React Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fskill_page%2F36894%2Flogo%2Foptimized%2Fsql-64a6e0f07773cf17581e76ca09e17dbc.png" 
            alt="Databases Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" 
            alt="Web Development Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" 
            alt="Systems Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://download.logo.wine/logo/Linux/Linux-Logo.wine.png" 
            alt="Systems Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/pug/1.0.1/1509818475774/Microsoft.VisualStudio.Services.Icons.Default" 
            alt="Systems Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" 
            alt="Systems Icon" 
            className="tool-icon"
          />
        </div>
        <div className="tool">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png" 
            alt="Systems Icon" 
            className="tool-icon"
          />
        </div>
      </div>
      
      
    </section>
    
  );
}

export default Skills;
