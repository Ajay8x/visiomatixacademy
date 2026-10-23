import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { COMPANY_DETAILS } from '../data/faqsData';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-container">
        {/* Spacious 4-Column Layout */}
        <div className="footer-grid">
          {/* Column 1: Organization Identity & Mission */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-logo-badge">
                <img
                  src="/visiomatix-logo.png"
                  alt="Visiomatix Media Logo"
                  className="footer-brand-logo"
                  height="36"
                />
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-title">VISIOMATIX</span>
                <span className="footer-brand-sub">MEDIA & ACADEMY</span>
              </div>
            </div>

            <p className="footer-desc">
              A multidisciplinary creative and digital organization offering professional education alongside real-world industry exposure. Bridging the gap between learning and employment in tech, design, marketing, and CGI media.
            </p>

            <div className="footer-badge">
              <ShieldCheck size={16} />
              <span>Registered Creative Tech Platform</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>Home</a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')}>Verified Programs</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Agency Services</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Visiomatix</a>
              </li>
              <li>
                <a href="#workflow" onClick={(e) => handleLinkClick(e, 'workflow')}>Studio Workflow</a>
              </li>
              <li>
                <a href="#admissions" onClick={(e) => handleLinkClick(e, 'admissions')}>Admissions Process</a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')}>Student FAQs</a>
              </li>
              <li>
                <a href="#enquiry" onClick={(e) => handleLinkClick(e, 'enquiry')}>Apply for Batch</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Career Programs</h4>
            <ul className="footer-links">
              {COURSES.map(course => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    onClick={(e) => handleLinkClick(e, 'courses')}
                    title={`${course.title} (${course.duration})`}
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & Location */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Contact & Studio</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <address className="footer-address">
                  {COMPANY_DETAILS.address}
                </address>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} className="footer-icon" />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="footer-contact-link">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} className="footer-icon" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="footer-contact-link">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="footer-cta-box">
              <span className="cta-box-text">Ready to kickstart your journey?</span>
              <a
                href="#enquiry"
                className="btn btn-primary btn-sm footer-btn"
                onClick={(e) => handleLinkClick(e, 'enquiry')}
              >
                <span>Request Counselling</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright-text">
              © {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
            </p>
            <div className="footer-disclaimer">
              <span>Notice: Verified official details for Visiomatix Media Pvt. Ltd. Nashik, Maharashtra.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
