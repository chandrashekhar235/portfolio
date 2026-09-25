import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Full Stack', 'Web App'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="section mono-projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 03. SELECTED WORKS</span>
          <h2 className="section-title">
            Featured <span className="text-outline">Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered with modern architecture, real-time communication, and clean design systems.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mono-filter-bar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`mono-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'All' ? 'ALL WORKS' : filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mono-projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="mono-project-card glass-panel">
              {/* Image Box */}
              <div 
                className="mono-project-img-box"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mono-project-thumbnail"
                  loading="lazy"
                />
                <div className="mono-img-overlay">
                  <button className="mono-preview-btn">
                    <Eye size={16} />
                    <span>View Architecture</span>
                  </button>
                </div>
                <div className="mono-project-number">0{idx + 1}</div>
                <span className="mono-category-badge">{project.category}</span>
              </div>

              {/* Card Body */}
              <div className="mono-project-body">
                <div className="mono-project-header">
                  <h3 
                    className="mono-project-title"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <button
                    className="mono-arrow-trigger"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="mono-project-sub">{project.subtitle}</p>
                <p className="mono-project-desc">{project.description}</p>

                {/* Tech Pills */}
                <div className="mono-tech-pills">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mono-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mono-project-actions">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={13} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <GithubIcon size={13} />
                      <span>Code</span>
                    </a>
                  )}
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Banner */}
        <div className="mono-github-banner glass-panel">
          <div className="mono-banner-left">
            <div className="mono-banner-icon">
              <FolderGit2 size={24} />
            </div>
            <div>
              <h3 className="mono-banner-title">Looking for more experiments?</h3>
              <p className="mono-banner-desc">Explore more repositories, algorithmic solutions, and prototypes on GitHub.</p>
            </div>
          </div>
          <a
            href="https://github.com/chandrashekhar235"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <GithubIcon size={16} />
            <span>@chandrashekhar235</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
