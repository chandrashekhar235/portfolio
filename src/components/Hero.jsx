import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo, stats } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const currentRole = personalInfo.typewriterRoles[roleIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.typewriterRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setCardTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <>
      <section id="home" className="mono-hero-section">
        <div className="container mono-hero-container">
          
          {/* 1. Unobstructed Giant Typography Headline Across the Hero */}
          <div className="hero-giant-header">
            <div className="giant-title-text">
              <span className="giant-text-outline">HI</span>
              <span className="giant-text-solid">THERE</span>
            </div>
            <div className="hero-header-line" />
          </div>

          {/* 2. Balanced Editorial 2-Column Split: Content Left, Portrait Right */}
          <div className="hero-split-grid">
            {/* Left Column: Developer Information */}
            <div className="hero-content-col">
              <div className="hero-developer-tags">
                <span className="developer-name-spaced">CHANDRA SHEKHAR</span>
                <span className="tag-separator">//</span>
                <span className="developer-title-spaced">FULL STACK DEVELOPER</span>
              </div>

              {/* Dynamic Typing Ticker */}
              <div className="hero-typing-strip">
                <span className="typing-symbol">&gt;</span>
                <span className="typing-lead">Specializing in</span>
                <span className="typing-value">{displayedText}</span>
                <span className="typing-caret">_</span>
              </div>

              <p className="hero-bio-lead">
                I build scalable web applications with React, Node.js, Express, and MongoDB. Bridging architectural discipline, clean code, and high-performance user interfaces.
              </p>

              {/* Quick Action Buttons */}
              <div className="hero-quick-actions">
                <a href="#projects" className="btn btn-primary">
                  <span>Explore Projects</span>
                  <ArrowDown size={14} />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span>Curriculum Vitae</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Bottom Controls: Location Pill + Social Icons */}
              <div className="hero-bottom-controls-row">
                <div className="location-status-pill">
                  <span className="location-dot" />
                  <MapPin size={13} className="location-pin-icon" />
                  <span>Based in Delhi, India</span>
                </div>

                <div className="hero-social-circles">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-social-circle"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-social-circle"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-social-circle"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Monochrome Portrait Showcase */}
            <div className="hero-portrait-col">
              <div
                className="editorial-portrait-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`
                }}
              >
                <div className="portrait-corner-tag top-left">┌ 01 / DEV ┐</div>
                <div className="portrait-corner-tag bottom-right">└ CS.PORTFOLIO ┘</div>
                
                <div className="portrait-image-container">
                  <img
                    src="/photo.jpeg"
                    alt="Chandra Shekhar - Full Stack Developer"
                    className="portrait-img-monochrome"
                  />
                  <div className="portrait-bottom-fade" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infinite Kinetic Marquee Ticker */}
      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-track">
          <span className="marquee-item">REACT.JS <span className="marquee-dot" /></span>
          <span className="marquee-item">NODE.JS <span className="marquee-dot" /></span>
          <span className="marquee-item">EXPRESS <span className="marquee-dot" /></span>
          <span className="marquee-item">MONGODB <span className="marquee-dot" /></span>
          <span className="marquee-item">MERN STACK <span className="marquee-dot" /></span>
          <span className="marquee-item">WEBRTC REALTIME <span className="marquee-dot" /></span>
          <span className="marquee-item">C++ &amp; DSA <span className="marquee-dot" /></span>
          <span className="marquee-item">CLEAN ARCHITECTURE <span className="marquee-dot" /></span>
          <span className="marquee-item">UI/UX CRAFTSMANSHIP <span className="marquee-dot" /></span>
          <span className="marquee-item">FULL STACK DEVELOPER <span className="marquee-dot" /></span>
          {/* Repeat */}
          <span className="marquee-item">REACT.JS <span className="marquee-dot" /></span>
          <span className="marquee-item">NODE.JS <span className="marquee-dot" /></span>
          <span className="marquee-item">EXPRESS <span className="marquee-dot" /></span>
          <span className="marquee-item">MONGODB <span className="marquee-dot" /></span>
          <span className="marquee-item">MERN STACK <span className="marquee-dot" /></span>
          <span className="marquee-item">WEBRTC REALTIME <span className="marquee-dot" /></span>
          <span className="marquee-item">C++ &amp; DSA <span className="marquee-dot" /></span>
          <span className="marquee-item">CLEAN ARCHITECTURE <span className="marquee-dot" /></span>
          <span className="marquee-item">UI/UX CRAFTSMANSHIP <span className="marquee-dot" /></span>
          <span className="marquee-item">FULL STACK DEVELOPER <span className="marquee-dot" /></span>
        </div>
      </div>
    </>
  );
};

export default Hero;
