import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          Nimo Abdulkadir
        </a>
        <ul className="nav-links">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-links"
            >
              About
            </Link>
          </li>  
           <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-links"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-links"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-links"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-links"
            >
              Contact
            </Link>
          </li>
       
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
