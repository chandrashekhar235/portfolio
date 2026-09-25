import React from 'react';
import { Calendar, Briefcase, Award, Sparkles, GraduationCap } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section mono-experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 04. EXPERIENCE &amp; MILESTONES</span>
          <h2 className="section-title">
            Engineering <span className="text-outline">Trajectory</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of hands-on projects, algorithmic rigor, and software production.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mono-timeline-wrapper">
          <div className="mono-timeline-line" />

          <div className="mono-timeline-entries">
            {journeyMilestones.map((milestone, idx) => (
              <div key={idx} className="mono-timeline-entry">
                {/* Node Ring */}
                <div className="mono-timeline-node">
                  <div className="mono-node-ring">
                    <div className="mono-node-core" />
                  </div>
                </div>

                {/* Card */}
                <div className="mono-timeline-card glass-panel">
                  <div className="mono-card-header">
                    <span className="mono-year-badge">{milestone.year}</span>
                    <span className="mono-company-tag">{milestone.company}</span>
                  </div>

                  <h3 className="mono-milestone-title">{milestone.title}</h3>
                  <p className="mono-milestone-desc">{milestone.description}</p>

                  <div className="mono-milestone-skills">
                    {milestone.skills.map((skill) => (
                      <span key={skill} className="mono-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
