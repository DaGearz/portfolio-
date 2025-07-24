import React from "react";
import { Link } from "react-router-dom";
import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import IframePreview from "../../ui/IframePreview/IframePreview";
import projectsData from "../../../data/projectsData";
import noPhoto from "../../../assets/noPhoto.png";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  // Get featured projects from your actual data
  const featuredProjects = projectsData
    .filter((project) => project.useFeatured && project.usePortfolio)
    .map((project) => {
      // Create featured descriptions for homepage display
      const featuredDescriptions = {
        1: "My personal developer portfolio built from scratch with React. Features responsive design and showcases my technical capabilities.",
        2: "Interactive React app that translates text to Pig Latin in real-time. Demonstrates controlled components and event handling.",
        3: "React app integrating Google Maps API for visualizing KMZ data. Shows third-party API consumption and map rendering.",
        4: "Full-stack MERN application for note-taking. Covers RESTful APIs, MongoDB integration, and React-to-backend communication.",
        5: "Custom Git implementation in Python called 'daggit'. Recreates core Git functionality including file tracking and hashing.",
      };

      // Get image - use project image, iframe, or fallback
      let imageUrl = noPhoto;
      let useIframe = false;

      if (project.img) {
        imageUrl = project.img;
      } else if (project.imgIFrame) {
        useIframe = true;
      }

      return {
        id: project.id,
        title: project.title,
        description:
          featuredDescriptions[project.id] ||
          project.description.substring(0, 120) + "...",
        image: imageUrl,
        useIframe: useIframe,
        iframeUrl: project.imgIFrame,
        tech: project.tech.slice(0, 4), // Limit to 4 tech tags for clean display
        liveUrl: project.website || project.imgIFrame || "#",
        githubUrl: project.git1[0] || "#",
        githubUrl2: project.git2[0] || null,
        hasBackend: project.git2[0] !== null,
      };
    });

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
                {project.useIframe ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-projects__iframe-link"
                  >
                    <IframePreview
                      src={project.iframeUrl}
                      title={project.title}
                      className="featured-projects__iframe"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featured-projects__image"
                  />
                )}
                <div className="featured-projects__overlay">
                  <div className="featured-projects__links">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" size="sm">
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          {project.hasBackend ? "Frontend" : "GitHub"}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl2 && (
                      <a
                        href={project.githubUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          Backend
                        </Button>
                      </a>
                    )}
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
