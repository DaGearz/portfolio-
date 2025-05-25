import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <div className="cta__text">
            <h2 className="cta__title">Ready to Work Together?</h2>
            <p className="cta__description">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you have a specific idea in mind or
              just want to explore possibilities, let's start a conversation.
            </p>

            <div className="cta__features">
              <div className="cta__feature">
                <div className="cta__feature-icon">⚡</div>
                <div className="cta__feature-text">
                  <h3>Fast Turnaround</h3>
                  <p>Quick response times and efficient development</p>
                </div>
              </div>
              <div className="cta__feature">
                <div className="cta__feature-icon">🎯</div>
                <div className="cta__feature-text">
                  <h3>Goal-Oriented</h3>
                  <p>Focused on delivering results that matter</p>
                </div>
              </div>
              <div className="cta__feature">
                <div className="cta__feature-icon">🤝</div>
                <div className="cta__feature-text">
                  <h3>Collaborative</h3>
                  <p>Open communication throughout the process</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta__actions">
            <Link to="/contact-info">
              <Button
                variant="primary"
                size="xl"
                className="cta__primary-button"
              >
                Get In Touch
              </Button>
            </Link>
            <Link to="/resume">
              <Button
                variant="outline"
                size="lg"
                className="cta__secondary-button"
              >
                View Resume
              </Button>
            </Link>

            <div className="cta__contact-info">
              <p className="cta__contact-text">
                Or reach out directly at{" "}
                <a href="mailto:todd@example.com" className="cta__email">
                  todd@example.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="cta__decoration">
          <div className="cta__decoration-circle cta__decoration-circle--1"></div>
          <div className="cta__decoration-circle cta__decoration-circle--2"></div>
          <div className="cta__decoration-circle cta__decoration-circle--3"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
