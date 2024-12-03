import React from "react";
import "./SideNavbar.css"; // Assuming you have a custom CSS file for styles

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <div className="nav-items">
        <a
          href="https://github.com/Nimoabdul"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
            alt="GitHub"
            className="nav-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nimo-abdul-b54059215/"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin.png" // Replace with your actual LinkedIn image URL
            alt="LinkedIn"
            className="nav-icon"
          />
        </a>
        <a
          href="mailto:nimoabdul10@gmail.com"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/win10/200/FFFFFF/gmail.png" // Replace with your actual email image URL
            alt="Email"
            className="nav-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default SideNavbar;
