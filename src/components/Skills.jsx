import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Server, 
  Cpu, 
  Database, 
  Binary, 
  Layout, 
  Radio, 
  Network, 
  Terminal as TerminalIcon, 
  GitBranch, 
  Rocket, 
  Palette, 
  CheckCircle,
  CornerDownLeft
} from 'lucide-react';
import { skills, skillCategories, terminalBio } from '../data/portfolioData';

const iconComponents = {
  Code2,
  FileCode,
  Server,
  Cpu,
  Database,
  Binary,
  Layout,
  Radio,
  Network,
  Terminal: TerminalIcon,
  GitBranch,
  Rocket,
  Palette,
  CheckCircle
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'command', text: 'whoami' },
    { type: 'output', text: terminalBio.whoami },
    { type: 'command', text: 'skills --list' },
    { type: 'output', text: terminalBio.skills }
  ]);
  const [inputCommand, setInputCommand] = useState('');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const handleRunCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      setInputCommand('');
      return;
    }

    let output = '';
    if (trimmed === 'help') {
      output = 'Commands available: whoami, skills, projects, contact, status, clear';
    } else if (trimmed === 'whoami') {
      output = terminalBio.whoami;
    } else if (trimmed.startsWith('skills')) {
      output = terminalBio.skills;
    } else if (trimmed === 'projects') {
      output = terminalBio.projects;
    } else if (trimmed === 'contact') {
      output = terminalBio.contact;
    } else if (trimmed === 'status') {
      output = terminalBio.status;
    } else {
      output = `zsh: command not found: ${trimmed}. Type 'help' for command listing.`;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { type: 'command', text: cmd },
      { type: 'output', text: output }
    ]);
    setInputCommand('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRunCommand(inputCommand);
    }
  };

  return (
    <section id="skills" className="section mono-skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 02. TECHNICAL STACK</span>
          <h2 className="section-title">
            Skills &amp; <span className="text-outline">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Core competencies, backend architecture, modern frameworks, and interactive developer CLI.
          </p>
        </div>

        {/* Category Filter Pills in Monochrome */}
        <div className="mono-category-filters">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`mono-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mono-skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconComponents[skill.icon] || Code2;
            return (
              <div key={skill.name} className="mono-skill-card glass-panel">
                <div className="mono-skill-top">
                  <div className="mono-skill-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="mono-skill-percentage">{skill.level}%</span>
                </div>

                <div className="mono-skill-body">
                  <h3 className="mono-skill-name">{skill.name}</h3>
                  <div className="mono-skill-bar-bg">
                    <div 
                      className="mono-skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Terminal in Monochrome */}
        <div className="mono-terminal-box glass-panel">
          <div className="mono-terminal-bar">
            <div className="mono-terminal-dots">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
            </div>
            <div className="mono-terminal-label">
              <TerminalIcon size={13} />
              <span>developer@chandra: ~/skills (zsh)</span>
            </div>
            <div className="mono-terminal-shortcuts">
              <button onClick={() => handleRunCommand('whoami')} className="mono-quick-btn">whoami</button>
              <button onClick={() => handleRunCommand('skills')} className="mono-quick-btn">skills</button>
              <button onClick={() => handleRunCommand('projects')} className="mono-quick-btn">projects</button>
              <button onClick={() => handleRunCommand('clear')} className="mono-quick-btn">clear</button>
            </div>
          </div>

          <div className="mono-terminal-screen">
            <div className="mono-terminal-logs">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className={`term-entry term-${item.type}`}>
                  {item.type === 'command' ? (
                    <div className="term-cmd-row">
                      <span className="term-user-prompt">user@cs:~$</span>
                      <span className="term-cmd-string">{item.text}</span>
                    </div>
                  ) : (
                    <div className="term-out-string">{item.text}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mono-terminal-input-bar">
              <span className="term-user-prompt">user@cs:~$</span>
              <input
                type="text"
                className="mono-terminal-input-field"
                placeholder="type 'help', 'status', 'contact' and hit enter..."
                value={inputCommand}
                onChange={(e) => setInputCommand(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button 
                className="mono-terminal-run-btn"
                onClick={() => handleRunCommand(inputCommand)}
                aria-label="Submit command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
