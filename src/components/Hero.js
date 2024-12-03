import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Nimo Abdulkadir</h1>
        <p>Data Analyst | Problem Solver | Innovator</p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:nimo@example.com"><FaEnvelope /></a>
        </div>
      </div>
    </header>
  );
}

export default Hero;