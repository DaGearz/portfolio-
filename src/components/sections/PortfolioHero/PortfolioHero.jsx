import React from 'react';
import './PortfolioHero.css';

const PortfolioHero = () => {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero__container">
        <div className="portfolio-hero__content">
          <h1 className="portfolio-hero__title">My Portfolio</h1>
          <p className="portfolio-hero__subtitle">
            A collection of projects showcasing my journey in software development
          </p>
          <p className="portfolio-hero__description">
            From full-stack web applications to interactive components, each project 
            represents a step forward in my development skills. Built with modern 
            technologies and a focus on user experience, clean code, and innovative solutions.
          </p>
          
          <div className="portfolio-hero__stats">
            <div className="portfolio-hero__stat">
              <span className="portfolio-hero__stat-number">10+</span>
              <span className="portfolio-hero__stat-label">Projects Built</span>
            </div>
            <div className="portfolio-hero__stat">
              <span className="portfolio-hero__stat-number">6+</span>
              <span className="portfolio-hero__stat-label">Technologies</span>
            </div>
            <div className="portfolio-hero__stat">
              <span className="portfolio-hero__stat-number">100%</span>
              <span className="portfolio-hero__stat-label">Passion Driven</span>
            </div>
          </div>
        </div>
        
        <div className="portfolio-hero__visual">
          <div className="portfolio-hero__code-window">
            <div className="portfolio-hero__code-header">
              <div className="portfolio-hero__code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="portfolio-hero__code-title">portfolio.js</span>
            </div>
            <div className="portfolio-hero__code-content">
              <div className="portfolio-hero__code-line">
                <span className="portfolio-hero__code-keyword">const</span>
                <span className="portfolio-hero__code-variable"> developer</span>
                <span className="portfolio-hero__code-operator"> = </span>
                <span className="portfolio-hero__code-string">"Todd Williams"</span>
                <span className="portfolio-hero__code-punctuation">;</span>
              </div>
              <div className="portfolio-hero__code-line">
                <span className="portfolio-hero__code-keyword">const</span>
                <span className="portfolio-hero__code-variable"> passion</span>
                <span className="portfolio-hero__code-operator"> = </span>
                <span className="portfolio-hero__code-string">"building amazing things"</span>
                <span className="portfolio-hero__code-punctuation">;</span>
              </div>
              <div className="portfolio-hero__code-line">
                <span className="portfolio-hero__code-keyword">const</span>
                <span className="portfolio-hero__code-variable"> skills</span>
                <span className="portfolio-hero__code-operator"> = </span>
                <span className="portfolio-hero__code-punctuation">[</span>
              </div>
              <div className="portfolio-hero__code-line portfolio-hero__code-line--indent">
                <span className="portfolio-hero__code-string">"React"</span>
                <span className="portfolio-hero__code-punctuation">, </span>
                <span className="portfolio-hero__code-string">"JavaScript"</span>
                <span className="portfolio-hero__code-punctuation">, </span>
                <span className="portfolio-hero__code-string">"Node.js"</span>
              </div>
              <div className="portfolio-hero__code-line">
                <span className="portfolio-hero__code-punctuation">];</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
