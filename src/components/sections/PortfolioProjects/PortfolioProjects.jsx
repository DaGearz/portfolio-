import React, { useState } from "react";
import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import projectsData from "../../../data/projectsData";
import "./PortfolioProjects.css";

const PortfolioProjects = () => {
  const [filter, setFilter] = useState("all");

  // Transform your project data to match the component structure
  const transformedProjects = projectsData
    .filter((project) => project.usePortfolio)
    .map((project) => {
      // Create featured descriptions for portfolio display
      const featuredDescriptions = {
        1: "My personal developer portfolio built from scratch with React. Features responsive design, custom styling, and showcases my technical capabilities on a custom domain.",
        2: "Interactive React app that translates text to Pig Latin in real-time. Demonstrates controlled components, event handling, and string manipulation techniques.",
        3: "React app integrating Google Maps API for visualizing KMZ data. Shows third-party API consumption, environmental variables, and map layer rendering.",
        4: "Full-stack MERN application for note-taking. Covers RESTful APIs, MongoDB integration, Express middleware, and React-to-backend communication.",
        5: "Custom Git implementation in Python called 'daggit'. Recreates core Git functionality including file tracking, hashing, and version control concepts.",
      };

      // Determine category based on tech stack
      let category = "web";
      if (
        project.tech.includes("MongoDB") &&
        project.tech.includes("Node.js")
      ) {
        category = "fullstack";
      } else if (project.tech.includes("Python")) {
        category = "backend";
      }

      // Get image - use project image or fallback
      let imageUrl =
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop";
      if (project.img) {
        imageUrl = project.img;
      } else if (project.imgIFrame) {
        // For iframe projects, use a code/web development image
        imageUrl =
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop";
      }

      return {
        id: project.id,
        title: project.title,
        description:
          featuredDescriptions[project.id] ||
          project.description.substring(0, 150) + "...",
        image: imageUrl,
        tech: project.tech,
        category: category,
        liveUrl: project.website || project.imgIFrame || "#",
        githubUrl: project.git1[0] || "#",
        githubUrl2: project.git2[0] || null,
        featured: project.useFeatured,
        hasBackend: project.git2[0] !== null,
      };
    });

  const projects = transformedProjects;

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Frontend" },
    { key: "fullstack", label: "Full Stack" },
    { key: "backend", label: "Backend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="portfolio-projects">
      <div className="portfolio-projects__container">
        <div className="portfolio-projects__header">
          <h2 className="portfolio-projects__title">Featured Work</h2>
          <p className="portfolio-projects__description">
            A showcase of my development projects across different technologies
            and domains
          </p>
        </div>

        <div className="portfolio-projects__filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`portfolio-projects__filter ${
                filter === category.key
                  ? "portfolio-projects__filter--active"
                  : ""
              }`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-projects__grid">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              variant="default"
              padding="none"
              hover={true}
              className="portfolio-projects__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-projects__card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-projects__image"
                />
                <div className="portfolio-projects__overlay">
                  <div className="portfolio-projects__links">
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        {project.hasBackend ? "Frontend" : "GitHub"}
                      </Button>
                    </a>
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
                {project.featured && (
                  <div className="portfolio-projects__featured-badge">
                    Featured
                  </div>
                )}
              </div>

              <div className="portfolio-projects__card-content">
                <h3 className="portfolio-projects__card-title">
                  {project.title}
                </h3>
                <p className="portfolio-projects__card-description">
                  {project.description}
                </p>

                <div className="portfolio-projects__tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="portfolio-projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
