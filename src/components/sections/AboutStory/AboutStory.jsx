import React from 'react';
import Card from '../../ui/Card/Card';
import './AboutStory.css';

const AboutStory = () => {
  const storyCards = [
    {
      icon: '🎯',
      title: 'Engineering Foundation',
      description: 'Started with mechanical engineering at UC Riverside, learning systematic problem-solving and analytical thinking that now drives my approach to software development.',
      highlight: 'Methodical & Analytical'
    },
    {
      icon: '⚙️',
      title: 'Professional Growth',
      description: 'Spent 5+ years as a project engineer, managing complex systems, leading teams, and optimizing workflows. These experiences taught me the value of clean, maintainable solutions.',
      highlight: 'Leadership & Systems'
    },
    {
      icon: '💻',
      title: 'Code Discovery',
      description: 'Discovered my passion for programming while automating engineering tasks. The transition from physical systems to digital solutions felt natural and exciting.',
      highlight: 'Innovation & Automation'
    },
    {
      icon: '🚀',
      title: 'Full-Stack Journey',
      description: 'Dove deep into modern web technologies, building full-stack applications and constantly learning new frameworks. Every project is an opportunity to grow.',
      highlight: 'Continuous Learning'
    }
  ];

  const personalValues = [
    {
      title: 'Community Impact',
      description: 'I believe technology should serve people and communities. Whether it\'s through open-source contributions or local projects, I aim to make a positive difference.',
      icon: '🤝'
    },
    {
      title: 'Outdoor Adventures',
      description: 'When I\'m not coding, you\'ll find me on mountain trails, backpacking, or running. Nature keeps me grounded and provides fresh perspectives on problem-solving.',
      icon: '🏔️'
    },
    {
      title: 'Lifelong Learning',
      description: 'The tech world evolves rapidly, and I love staying current with new technologies, best practices, and industry trends. Every day is a chance to learn something new.',
      icon: '📚'
    }
  ];

  return (
    <section className="about-story">
      <div className="about-story__container">
        {/* Journey Section */}
        <div className="about-story__section">
          <div className="about-story__header">
            <h2 className="about-story__title">My Journey</h2>
            <p className="about-story__description">
              From engineering blueprints to code architecture, here's how I found my path in tech
            </p>
          </div>

          <div className="about-story__grid">
            {storyCards.map((card, index) => (
              <Card 
                key={card.title} 
                variant="default" 
                padding="lg" 
                hover={true}
                className="about-story__card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="about-story__card-icon">{card.icon}</div>
                <h3 className="about-story__card-title">{card.title}</h3>
                <p className="about-story__card-description">{card.description}</p>
                <span className="about-story__card-highlight">{card.highlight}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="about-story__section about-story__section--values">
          <div className="about-story__header">
            <h2 className="about-story__title">Beyond the Code</h2>
            <p className="about-story__description">
              Personal growth and community impact go hand in hand with technical excellence
            </p>
          </div>

          <div className="about-story__values">
            {personalValues.map((value, index) => (
              <div 
                key={value.title} 
                className="about-story__value"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="about-story__value-icon">{value.icon}</div>
                <div className="about-story__value-content">
                  <h3 className="about-story__value-title">{value.title}</h3>
                  <p className="about-story__value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
