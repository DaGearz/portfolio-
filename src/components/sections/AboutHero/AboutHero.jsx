import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <h1 className="about-hero__title">About Me</h1>
            <p className="about-hero__subtitle">
              Engineer turned developer, problem solver at heart
            </p>
            <p className="about-hero__description">
              I'm a software developer with a mechanical engineering background and a passion 
              for solving real-world problems through code. From building dynamic full-stack 
              applications to optimizing back-end performance, I approach software like an 
              engineer—methodical, resourceful, and driven by design.
            </p>
          </div>
          
          <div className="about-hero__image">
            <div className="about-hero__image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                alt="Todd Williams" 
                className="about-hero__img"
              />
            </div>
            <div className="about-hero__stats">
              <div className="about-hero__stat">
                <span className="about-hero__stat-number">5+</span>
                <span className="about-hero__stat-label">Years Engineering</span>
              </div>
              <div className="about-hero__stat">
                <span className="about-hero__stat-number">2+</span>
                <span className="about-hero__stat-label">Years Coding</span>
              </div>
              <div className="about-hero__stat">
                <span className="about-hero__stat-number">∞</span>
                <span className="about-hero__stat-label">Curiosity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
