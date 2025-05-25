import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = ["React", "JavaScript", "Python", "Node.js", "CSS", "Git"];

  return (
    <section className={`hero ${isVisible ? "hero--visible" : ""}`}>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              <span className="hero__greeting-text">Hello, I'm</span>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-name">Todd Williams</span>
              <span className="hero__title-role">Full-Stack Developer</span>
            </h1>

            <p className="hero__description">
              I create innovative web applications and digital experiences that
              bring ideas to life. Passionate about clean code, modern
              technologies, and solving complex problems through elegant
              solutions.
            </p>

            <div className="hero__skills">
              <span className="hero__skills-label">Specializing in:</span>
              <div className="hero__skills-list">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="hero__skill-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero__actions">
              <Link to="/portfolio">
                <Button variant="primary" size="lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact-info">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__avatar">
              <div className="hero__avatar-image">
                <img
                  src="/src/assets/profilepic.jpg"
                  alt="Todd Williams"
                  className="hero__avatar-img"
                />
              </div>
              <div className="hero__avatar-decoration"></div>
            </div>

            <div className="hero__floating-elements">
              <div className="hero__floating-element hero__floating-element--1">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="hero__floating-element hero__floating-element--2">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="hero__floating-element hero__floating-element--3">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel"></div>
          </div>
          <span className="hero__scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
