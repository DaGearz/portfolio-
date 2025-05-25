import React from "react";
import { Link } from "react-router-dom";
import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Into The Abyss",
      description:
        "A dark fantasy adventure game built with modern web technologies. Features immersive storytelling and interactive gameplay.",
      image: "/api/placeholder/400/250",
      tech: ["React", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "MERN Stack Application",
      description:
        "Full-stack web application demonstrating CRUD operations, user authentication, and responsive design.",
      image: "/api/placeholder/400/250",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and skills with clean design and smooth animations.",
      image: "/api/placeholder/400/250",
      tech: ["React", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  return (
    <section className="featured-projects">
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <h2 className="featured-projects__title">Featured Projects</h2>
          <p className="featured-projects__description">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="featured-projects__grid">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              variant="default"
              padding="none"
              hover={true}
              className="featured-projects__card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="featured-projects__card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="featured-projects__image"
                />
                <div className="featured-projects__overlay">
                  <div className="featured-projects__links">
                    <Button variant="primary" size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="featured-projects__card-content">
                <h3 className="featured-projects__card-title">
                  {project.title}
                </h3>
                <p className="featured-projects__card-description">
                  {project.description}
                </p>

                <div className="featured-projects__tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="featured-projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="featured-projects__cta">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
