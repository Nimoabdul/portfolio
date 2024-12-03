import React from 'react';

import './App.css';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <SideNavbar />
      <Navbar />
      <Intro />
      <About />
     <Skills /> 
     <Experience /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
