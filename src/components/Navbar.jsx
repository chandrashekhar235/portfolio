import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'ABOUT ME', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'JOURNEY', href: '#experience' },
    { name: 'CONTACT', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`mono-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mono-nav-wrapper">
        {/* Minimal Code Logo like the reference image */}
        <a 
          href="#home" 
          className="mono-brand-logo" 
          onClick={(e) => handleLinkClick(e, '#home')}
          aria-label="Home"
        >
          <span className="code-tag-symbol">&lt;/&gt;</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="mono-desktop-nav">
          <ul className="mono-nav-list">
            <li className="mono-nav-item">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-nav-link resume-highlight"
              >
                <span>RESUME</span>
                <ArrowUpRight size={14} className="resume-arrow-icon" />
              </a>
            </li>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name} className="mono-nav-item">
                  <a
                    href={link.href}
                    className={`mono-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span className="mono-active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mono-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mono-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mono-drawer-inner">
          <ul className="mono-mobile-nav-list">
            <li className="mono-mobile-nav-item">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-mobile-link resume-link"
              >
                RESUME ↗
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.name} className="mono-mobile-nav-item">
                <a
                  href={link.href}
                  className="mono-mobile-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
