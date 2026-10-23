import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, GraduationCap } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'courses', label: 'Courses & Programs' },
    { id: 'services', label: 'Agency Services' },
    { id: 'about', label: 'About Us' },
    { id: 'workflow', label: 'Studio Workflow' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Wordmark */}
        <a 
          href="#hero" 
          className="brand-logo" 
          onClick={(e) => handleLinkClick(e, 'hero')}
          aria-label="Visiomatix Media & Academy Home"
        >
          <img 
            src="/visiomatix-logo.png" 
            alt="Visiomatix Media Logo" 
            className="brand-logo-img" 
            height="40" 
          />
          <div className="brand-text">
            <span className="brand-name">VISIOMATIX</span>
            <span className="brand-sub">MEDIA & ACADEMY</span>
          </div>
        </a>

        {/* Desktop Single-Row Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Action Buttons */}
        <div className="navbar-actions">
          <a
            href="#enquiry"
            className="btn btn-primary btn-sm nav-cta-btn"
            onClick={(e) => handleLinkClick(e, 'enquiry')}
          >
            <span>Apply Now</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-badge">
            <GraduationCap size={16} />
            <span>Practical Education & Creative Studio</span>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {link.label}
                    <ArrowRight size={16} className="mobile-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-drawer-cta">
            <a
              href="#enquiry"
              className="btn btn-primary btn-block"
              onClick={(e) => handleLinkClick(e, 'enquiry')}
            >
              <span>Enquire for Next Batch</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
