import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="mono-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="mono-modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="mono-modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        {/* Modal Image Header */}
        <div className="mono-modal-image-wrapper">
          <img src={project.image} alt={project.title} className="mono-modal-image" />
          <div className="mono-modal-img-gradient" />
          <div className="mono-modal-category">{project.category}</div>
        </div>

        {/* Modal Body */}
        <div className="mono-modal-body">
          <div className="mono-modal-title-row">
            <h3 className="mono-modal-title">{project.title}</h3>
            <p className="mono-modal-subtitle">{project.subtitle}</p>
          </div>

          <p className="mono-modal-desc">{project.description}</p>

          {/* Highlights */}
          <div className="mono-modal-section">
            <h4 className="mono-modal-section-title">
              <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
            </h4>
            <ul className="mono-modal-highlights">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="mono-modal-highlight-item">
                  <span className="mono-check-box">
                    <Check size={12} />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mono-modal-section">
            <h4 className="mono-modal-section-title">
              <span>TECHNOLOGIES APPLIED</span>
            </h4>
            <div className="mono-modal-tech-pills">
              {project.tags.map((tag) => (
                <span key={tag} className="mono-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mono-modal-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={15} />
                <span>Launch Application</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={15} />
                <span>Inspect Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
