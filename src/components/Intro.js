import React from "react";
import "./Intro.css"; // Ensure this file contains the CSS styles provided earlier.

const Intro = () => {
  return (
    <section className="intro d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="intro-heading display-4">
          Hi, I'm <span className="highlighted">Nimo</span>.
        </h1>
        <p className="intro-subheading lead">
          I'm a Software Developer,
          passionate about using technology to  make a positive impact in the world
        </p>
        <p className="intro-description">
          I specialize in building efficient, user-friendly applications and love learning about
          new tools, frameworks, and technologies.
        </p>
        <a  href="#contact" className="btn btn-primary mt-4" smooth={true} duration={500}>Let's Connect</a>
      </div>
    </section>
  );
};

export default Intro;
