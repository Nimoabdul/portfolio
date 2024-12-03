import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title-contact">Get In Touch</h2>
      <p className="contact-description">
        I'm always looking for new opportunities to collaborate or work on exciting projects. If you'd like to connect, feel free to reach out to me. I'll try my best to respond promptly!
      </p>
      <a href="mailto:Nimoabdul10@gmail.com" className="contact-button">
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
