import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mono-footer">
      <div className="container">
        <div className="mono-footer-top">
          <div className="mono-footer-brand">
            <a href="#home" className="mono-footer-logo" onClick={scrollToTop}>
              <span className="code-tag-symbol">&lt;/&gt;</span>
              <span className="mono-footer-name">CHANDRA SHEKHAR</span>
            </a>
            <p className="mono-footer-tagline">
              Full Stack Software Developer based in Delhi, India. Focused on modern React ecosystems, scalable APIs, and performance.
            </p>
            <div className="mono-footer-clock">
              <span className="clock-live-indicator" />
              <Globe size={13} />
              <span>DELHI, IN: <strong>{currentTime || '08:45 PM'} IST</strong></span>
            </div>
          </div>

          <div className="mono-footer-links-group">
            <span className="group-title">NAVIGATION</span>
            <ul className="footer-links-list">
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#experience">JOURNEY</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          <div className="mono-footer-links-group">
            <span className="group-title">CREATIONS</span>
            <ul className="footer-links-list">
              <li><a href="https://learn-bridge-woad.vercel.app" target="_blank" rel="noopener noreferrer">LearnBridge</a></li>
              <li><a href="https://chandrashekhar235.github.io/writespace/" target="_blank" rel="noopener noreferrer">WriteSpace</a></li>
              <li><a href="https://github.com/chandrashekhar235/techstore" target="_blank" rel="noopener noreferrer">TechStore</a></li>
              <li><a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">Resume / CV ↗</a></li>
            </ul>
          </div>

          <div className="mono-footer-back-col">
            <button className="mono-back-top-pill" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp size={16} />
              <span>TOP</span>
            </button>
          </div>
        </div>

        <div className="mono-footer-bottom">
          <p className="mono-copyright">
            &copy; {new Date().getFullYear()} CHANDRA SHEKHAR. ALL RIGHTS RESERVED.
          </p>

          <div className="mono-footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-social-circle"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-social-circle"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-social-circle"
              aria-label="Twitter"
            >
              <TwitterIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
