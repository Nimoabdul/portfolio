import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-left">
          <h2 className="section-title-about">About Me</h2>
          <p className="about-text">
            Hey, I'm <span className="highlight">Nimo</span> — a Computer Programming and Analysis student who loves building things that make life easier.
          </p>
          <p className="about-text">
            I have a strong background in <span className="highlight">software development</span>, <span className="highlight">web design</span>, <span className="highlight">mobile application development</span>, <span className="highlight">database programming</span>, and <span className="highlight">operating systems</span>. I’m also growing my skills in <span className="highlight">AWS Cloud</span> technologies and exploring the world of <span className="highlight">Machine Learning</span>. Whether it’s coding a clean solution or designing an intuitive experience, I’m all about creating tech that feels simple and smart.
          </p>
          <p className="about-text">
            When I'm not coding, you’ll probably find me hiking, skiing, hanging out with my cat, or getting creative with art and interior design. I believe the best ideas come when you mix tech skills with a little imagination.
          </p>
        </div>
        <div className="about-right">
          <img
            src="/me2.jpg"
            alt="Nimo"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
