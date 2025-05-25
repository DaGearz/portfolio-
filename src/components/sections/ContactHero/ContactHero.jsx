import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Let's Connect</h1>
          <p className="contact-hero__subtitle">
            Ready to build something amazing together
          </p>
          <p className="contact-hero__description">
            I'm always excited to discuss new opportunities, collaborate on interesting 
            projects, or simply connect with fellow developers and professionals. Whether 
            you have a project in mind, want to explore potential partnerships, or just 
            want to say hello, I'd love to hear from you.
          </p>
          
          <div className="contact-hero__quick-actions">
            <a 
              href="mailto:twill003@gmail.com" 
              className="contact-hero__cta-button contact-hero__cta-button--primary"
            >
              📧 Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/toddbwilliams" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-hero__cta-button contact-hero__cta-button--secondary"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
        
        <div className="contact-hero__visual">
          <div className="contact-hero__floating-elements">
            <div className="contact-hero__floating-element contact-hero__floating-element--1">
              📧
            </div>
            <div className="contact-hero__floating-element contact-hero__floating-element--2">
              💻
            </div>
            <div className="contact-hero__floating-element contact-hero__floating-element--3">
              🚀
            </div>
            <div className="contact-hero__floating-element contact-hero__floating-element--4">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
