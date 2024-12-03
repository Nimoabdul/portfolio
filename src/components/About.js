import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-left">
          <h2 className="section-title-about">A Little About Me</h2>
          <p className="about-text">
            Hi, I’m <span className="highlight">Nimo</span>, a Computer Programming and Analysis student. My passion lies in using technology to solve real-world problems and making a meaningful impact.
          </p>
          <p className="about-text">
            Over the course of my studies, I’ve developed a strong foundation in software development, web design, mobile application development, database programming, and operating systems. Whether it’s writing clean code or designing user-friendly interfaces, I enjoy the process of creating solutions that make life easier.
          </p>
          <p className="about-text">
          Outside of academics, I find joy in caring for my cat, skiing, hiking, and expressing my creativity through interior design and art. These passions help me recharge and bring a fresh perspective to my work.
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
