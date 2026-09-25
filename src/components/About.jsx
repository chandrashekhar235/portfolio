import React from 'react';
import { Layers, Sparkles, Cpu, Zap, MapPin, Terminal, Award, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo, coreValues, stats } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  Sparkles: Sparkles,
  Cpu: Cpu,
  Zap: Zap
};

const About = () => {
  return (
    <section id="about" className="section mono-about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">
            Engineering Code with <span className="text-outline">Precision</span>
          </h2>
          <p className="section-subtitle">
            Bridging architectural discipline and minimalist user interfaces for modern web applications.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="mono-about-grid">
          {/* Main Story Panel */}
          <div className="mono-story-card glass-panel">
            <div className="story-meta-header">
              <span className="story-index">01.1</span>
              <span className="story-label">PHILOSOPHY &amp; BACKGROUND</span>
            </div>

            <h3 className="mono-story-title">
              Crafting digital products with speed, scalability, and aesthetic rigor.
            </h3>

            <p className="mono-story-text">
              I am <strong className="text-white">Chandra Shekhar</strong>, a full stack software engineer based in Delhi, India. I specialize in designing and engineering performant web applications with modern React, Node.js, Express, and MongoDB.
            </p>

            <p className="mono-story-text">
              From real-time WebRTC audio architecture in <strong className="text-white">LearnBridge</strong> to responsive markdown content systems in <strong className="text-white">WriteSpace</strong>, I treat code as a craftsmanship—striving for modularity, clean patterns, and intuitive interactions.
            </p>

            {/* Quick Specs Bar */}
            <div className="mono-specs-row">
              <div className="mono-spec-item">
                <span className="spec-key">LOCATION:</span>
                <span className="spec-val">Delhi, India</span>
              </div>
              <div className="mono-spec-item">
                <span className="spec-key">ROLE:</span>
                <span className="spec-val">Full Stack Developer</span>
              </div>
              <div className="mono-spec-item">
                <span className="spec-key">AVAILABILITY:</span>
                <span className="spec-val">Open for Opportunities</span>
              </div>
            </div>

            {/* Resume Button */}
            <div className="story-actions-row">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Core Principles Column */}
          <div className="mono-pillars-col">
            <div className="pillars-meta-header">
              <span className="story-index">01.2</span>
              <span className="story-label">CORE PILLARS</span>
            </div>

            <div className="pillars-list">
              {coreValues.map((val, idx) => {
                const IconComponent = iconMap[val.icon] || Sparkles;
                return (
                  <div key={idx} className="mono-pillar-card glass-panel">
                    <div className="pillar-top-row">
                      <div className="pillar-icon-box">
                        <IconComponent size={20} />
                      </div>
                      <span className="pillar-number">0{idx + 1}</span>
                    </div>
                    <h4 className="pillar-title">{val.title}</h4>
                    <p className="pillar-desc">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Minimalist Stats Row */}
        <div className="mono-stats-strip glass-panel">
          {stats.map((item, idx) => (
            <div key={idx} className="mono-stat-box">
              <span className="mono-stat-val">{item.value}</span>
              <h4 className="mono-stat-title">{item.label}</h4>
              <p className="mono-stat-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
