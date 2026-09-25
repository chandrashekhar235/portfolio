import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      // Trigger monochrome celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#d4d4d8', '#a1a1aa', '#52525b']
        });
      } catch (err) {
        // Fallback
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmittedSuccess(false);
      }, 7000);
    }, 600);
  };

  return (
    <section id="contact" className="section mono-contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 05. CONTACT &amp; COLLABORATION</span>
          <h2 className="section-title">
            Let's Build Something <span className="text-outline">Impactful</span>
          </h2>
          <p className="section-subtitle">
            Open for full-time engineering roles, high-scale freelance contracts, and software inquiries.
          </p>
        </div>

        <div className="mono-contact-grid">
          {/* Direct Details */}
          <div className="mono-contact-info-col">
            <div className="mono-info-card glass-panel">
              <h3 className="mono-info-title">Direct Inquiries</h3>
              <p className="mono-info-desc">
                Have a project idea or role? Reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
              </p>

              {/* Email Card */}
              <div className="mono-contact-item">
                <div className="mono-contact-icon">
                  <Mail size={18} />
                </div>
                <div className="mono-contact-meta">
                  <span className="meta-label">EMAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="meta-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="mono-copy-btn"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check size={15} /> : <Copy size={15} />}
                  <span className="mono-tooltip">{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="mono-contact-item">
                <div className="mono-contact-icon">
                  <Phone size={18} />
                </div>
                <div className="mono-contact-meta">
                  <span className="meta-label">PHONE &amp; WHATSAPP</span>
                  <a href={`tel:${personalInfo.phone}`} className="meta-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  className="mono-copy-btn"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={15} /> : <Copy size={15} />}
                  <span className="mono-tooltip">{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="mono-contact-item">
                <div className="mono-contact-icon">
                  <MapPin size={18} />
                </div>
                <div className="mono-contact-meta">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-value">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mono-social-footer-strip">
                <span className="strip-label">CHANNELS:</span>
                <div className="mono-social-links-row">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-channel-btn"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-channel-btn"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-channel-btn"
                    aria-label="Resume"
                  >
                    <FileText size={16} />
                    <span>Resume</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="mono-form-col">
            <div className="mono-form-card glass-panel">
              <div className="mono-form-header">
                <div className="mono-header-tag">
                  <MessageSquare size={14} />
                  <span>TRANSMISSION</span>
                </div>
                <h3 className="mono-form-title">Send a Direct Message</h3>
              </div>

              {submittedSuccess && (
                <div className="mono-form-success" role="alert">
                  <CheckCircle2 size={18} />
                  <div>
                    <h4>Message Dispatched</h4>
                    <p>Thank you for reaching out. Chandra Shekhar will reply promptly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mono-contact-form">
                <div className="mono-form-grid-2">
                  <div className="mono-input-group">
                    <label htmlFor="name" className="mono-label">NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="mono-field"
                    />
                  </div>

                  <div className="mono-input-group">
                    <label htmlFor="email" className="mono-label">EMAIL *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mono-field"
                    />
                  </div>
                </div>

                <div className="mono-input-group">
                  <label htmlFor="subject" className="mono-label">SUBJECT *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mono-field"
                  />
                </div>

                <div className="mono-input-group">
                  <label htmlFor="message" className="mono-label">MESSAGE *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project, team, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mono-field mono-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary mono-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
