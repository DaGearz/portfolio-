import React, { useState } from 'react';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import TicTacToe from '../../playground/TicTacToe/TicTacToe';
import DefaultComponent from '../../playground/DefaultComponent/DefaultComponent';
import './PortfolioPlayground.css';

const PortfolioPlayground = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const playgroundItems = [
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      description: 'Classic game built with React hooks and state management. Features win detection, game reset, and clean UI.',
      icon: '🎮',
      component: TicTacToe,
      tech: ['React', 'Hooks', 'CSS Grid']
    },
    {
      id: 'default',
      title: 'Default Component',
      description: 'A template component showcasing modern React patterns, prop handling, and component structure.',
      icon: '⚛️',
      component: DefaultComponent,
      tech: ['React', 'Props', 'JSX']
    },
    {
      id: 'calculator',
      title: 'Calculator',
      description: 'Coming soon - A functional calculator with mathematical operations and memory features.',
      icon: '🧮',
      component: null,
      tech: ['React', 'State', 'Math'],
      comingSoon: true
    },
    {
      id: 'weather',
      title: 'Weather Widget',
      description: 'Coming soon - Real-time weather display with API integration and location services.',
      icon: '🌤️',
      component: null,
      tech: ['React', 'API', 'Geolocation'],
      comingSoon: true
    }
  ];

  const handleComponentToggle = (id) => {
    setActiveComponent(activeComponent === id ? null : id);
  };

  const ActiveComponent = activeComponent 
    ? playgroundItems.find(item => item.id === activeComponent)?.component 
    : null;

  return (
    <section className="portfolio-playground">
      <div className="portfolio-playground__container">
        <div className="portfolio-playground__header">
          <h2 className="portfolio-playground__title">Code Playground</h2>
          <p className="portfolio-playground__description">
            Interactive components and mini-projects I'm experimenting with. 
            Click on any component to see it in action!
          </p>
        </div>

        <div className="portfolio-playground__grid">
          {playgroundItems.map((item, index) => (
            <Card 
              key={item.id} 
              variant="default" 
              padding="lg" 
              hover={!item.comingSoon}
              className={`portfolio-playground__card ${
                item.comingSoon ? 'portfolio-playground__card--coming-soon' : ''
              } ${
                activeComponent === item.id ? 'portfolio-playground__card--active' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-playground__card-header">
                <div className="portfolio-playground__card-icon">{item.icon}</div>
                <div className="portfolio-playground__card-info">
                  <h3 className="portfolio-playground__card-title">{item.title}</h3>
                  {item.comingSoon && (
                    <span className="portfolio-playground__coming-soon-badge">Coming Soon</span>
                  )}
                </div>
              </div>
              
              <p className="portfolio-playground__card-description">
                {item.description}
              </p>
              
              <div className="portfolio-playground__tech">
                {item.tech.map((tech) => (
                  <span key={tech} className="portfolio-playground__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {!item.comingSoon && (
                <div className="portfolio-playground__card-actions">
                  <Button 
                    variant={activeComponent === item.id ? "outline" : "primary"}
                    size="sm"
                    onClick={() => handleComponentToggle(item.id)}
                  >
                    {activeComponent === item.id ? 'Hide Component' : 'Try It Out'}
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {activeComponent && ActiveComponent && (
          <div className="portfolio-playground__demo">
            <Card variant="default" padding="xl" className="portfolio-playground__demo-card">
              <div className="portfolio-playground__demo-header">
                <h3 className="portfolio-playground__demo-title">
                  {playgroundItems.find(item => item.id === activeComponent)?.title} Demo
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setActiveComponent(null)}
                >
                  ✕
                </Button>
              </div>
              <div className="portfolio-playground__demo-content">
                <ActiveComponent />
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPlayground;
