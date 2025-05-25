import React from 'react';
import Card from '../../ui/Card/Card';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Express.js', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Webpack', 'Vite']
    },
    {
      title: 'Soft Skills',
      icon: '🧠',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Continuous Learning']
    }
  ];

  return (
    <section className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <h2 className="skills__title">Skills & Expertise</h2>
          <p className="skills__description">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              variant="default" 
              padding="lg" 
              hover={true}
              className="skills__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{category.icon}</span>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>
              <div className="skills__card-content">
                {category.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="skills__stats">
          <div className="skills__stat">
            <span className="skills__stat-number">2+</span>
            <span className="skills__stat-label">Years Learning</span>
          </div>
          <div className="skills__stat">
            <span className="skills__stat-number">10+</span>
            <span className="skills__stat-label">Projects Built</span>
          </div>
          <div className="skills__stat">
            <span className="skills__stat-number">∞</span>
            <span className="skills__stat-label">Passion for Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
