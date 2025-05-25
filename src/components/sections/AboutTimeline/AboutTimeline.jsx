import React from "react";
import { getCodingExperienceText } from "../../../utils/dateUtils";
import "./AboutTimeline.css";

const AboutTimeline = () => {
  const timelineEvents = [
    {
      year: "2011",
      title: "Engineering Degree",
      company: "UC Riverside",
      description:
        "Graduated with B.S. in Mechanical Engineering, building a foundation in systematic problem-solving and analytical thinking.",
      type: "education",
    },
    {
      year: "2020-2023",
      title: "Project Engineer",
      company: "Cordoba Corporation",
      description:
        "Designed gas distribution systems, led Plant 3D transition, and automated data processes, reducing processing time by 40%.",
      type: "work",
    },
    {
      year: "2023",
      title: "Project Engineer",
      company: "WM Lyles",
      description:
        "Coordinated structural reviews for water treatment facilities and optimized procurement plans using AutoCAD and Excel.",
      type: "work",
    },
    {
      year: "2023-2025",
      title: "Utility Designer",
      company: "Aquawolf LLC",
      description:
        "Leading overhead-to-underground utility design projects and optimizing design workflows for infrastructure upgrades.",
      type: "work",
    },
    {
      year: "2025-Present",
      title: "Full-Stack Development",
      company: "Self-Taught Journey",
      description: `Transitioned to software development, mastering JavaScript, React, Node.js, and building full-stack applications. Now with ${getCodingExperienceText().toLowerCase()} of hands-on experience.`,
      type: "learning",
    },
    {
      year: "2025",
      title: "Ready for New Challenges",
      company: "Your Company?",
      description:
        "Seeking opportunities to apply my engineering mindset and development skills to create impactful software solutions.",
      type: "future",
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "education":
        return "🎓";
      case "work":
        return "💼";
      case "learning":
        return "💻";
      case "future":
        return "🚀";
      default:
        return "📍";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "timeline-item--education";
      case "work":
        return "timeline-item--work";
      case "learning":
        return "timeline-item--learning";
      case "future":
        return "timeline-item--future";
      default:
        return "";
    }
  };

  return (
    <section className="about-timeline">
      <div className="about-timeline__container">
        <div className="about-timeline__header">
          <h2 className="about-timeline__title">My Timeline</h2>
          <p className="about-timeline__description">
            Key milestones in my journey from engineering to software
            development
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__line"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={`${event.year}-${event.title}`}
              className={`timeline-item ${getTypeColor(event.type)}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-item__marker">
                <span className="timeline-item__icon">
                  {getTypeIcon(event.type)}
                </span>
              </div>

              <div className="timeline-item__content">
                <div className="timeline-item__year">{event.year}</div>
                <h3 className="timeline-item__title">{event.title}</h3>
                <div className="timeline-item__company">{event.company}</div>
                <p className="timeline-item__description">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
