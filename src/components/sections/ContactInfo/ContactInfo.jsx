import React from 'react';
import Card from '../../ui/Card/Card';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'twill003@gmail.com',
      link: 'mailto:twill003@gmail.com',
      description: 'Best way to reach me for detailed discussions'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '(619) 365-5267',
      link: 'tel:+16193655267',
      description: 'Available for calls during business hours'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Diego, CA',
      link: null,
      description: 'Open to remote work and local opportunities'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'toddbwilliams',
      link: 'https://www.linkedin.com/in/toddbwilliams',
      description: 'Professional networking and career updates'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'DaGearz',
      link: 'https://github.com/DaGearz',
      description: 'Code repositories and open source contributions'
    },
    {
      icon: '🌐',
      title: 'Website',
      value: 'toddwilliams.dev',
      link: 'https://www.toddwilliams.dev',
      description: 'Portfolio and latest project updates'
    }
  ];

  const opportunities = [
    {
      icon: '💼',
      title: 'Full-time Opportunities',
      description: 'Software development roles, particularly in full-stack or frontend positions'
    },
    {
      icon: '🚀',
      title: 'Freelance Projects',
      description: 'Applying my engineering background and development skills to solve real problems'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Open-source projects, community initiatives, and technical partnerships'
    },
    {
      icon: '🌟',
      title: 'Networking',
      description: 'Connecting with developers, engineers, and tech professionals'
    }
  ];

  return (
    <section className="contact-info">
      <div className="contact-info__container">
        {/* Contact Methods */}
        <div className="contact-info__section">
          <div className="contact-info__header">
            <h2 className="contact-info__title">Get In Touch</h2>
            <p className="contact-info__description">
              Choose your preferred way to connect. I typically respond within 24-48 hours.
            </p>
          </div>

          <div className="contact-info__grid">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                variant="default" 
                padding="lg" 
                hover={!!method.link}
                className="contact-info__card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-info__card-icon">{method.icon}</div>
                <h3 className="contact-info__card-title">{method.title}</h3>
                {method.link ? (
                  <a 
                    href={method.link} 
                    className="contact-info__card-value contact-info__card-value--link"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="contact-info__card-value">{method.value}</span>
                )}
                <p className="contact-info__card-description">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="contact-info__section contact-info__section--opportunities">
          <div className="contact-info__header">
            <h2 className="contact-info__title">What I'm Looking For</h2>
            <p className="contact-info__description">
              I'm excited about opportunities that challenge me and allow me to grow as a developer
            </p>
          </div>

          <div className="contact-info__opportunities">
            {opportunities.map((opportunity, index) => (
              <div 
                key={opportunity.title} 
                className="contact-info__opportunity"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="contact-info__opportunity-icon">{opportunity.icon}</div>
                <div className="contact-info__opportunity-content">
                  <h3 className="contact-info__opportunity-title">{opportunity.title}</h3>
                  <p className="contact-info__opportunity-description">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time */}
        <div className="contact-info__footer">
          <Card variant="default" padding="lg" className="contact-info__response-card">
            <div className="contact-info__response-content">
              <span className="contact-info__response-icon">⚡</span>
              <div>
                <h3 className="contact-info__response-title">Quick Response</h3>
                <p className="contact-info__response-text">
                  I typically respond to emails within 24-48 hours. Looking forward to connecting with you!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
