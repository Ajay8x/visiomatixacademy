import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, CheckCircle2 } from 'lucide-react';

const TYPEWRITER_PHRASES = [
  'Full Stack Web Development',
  'UI/UX Design Systems',
  '3D CGI & Visual Effects',
  'Digital & Performance Marketing',
  'Live Client Deliverables'
];

export default function Hero({ onNavigate }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Exact Typewriter animation inspired by achieverstuitionbureau.com
  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && currentText === currentPhrase) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? currentPhrase.substring(0, currentText.length - 1)
          : currentPhrase.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="hero-section hero-achievers-style">
      {/* Soft Ambient Mesh Background */}
      <div className="hero-bg-accent hero-blob-1" aria-hidden="true" />
      <div className="hero-bg-accent hero-blob-2" aria-hidden="true" />

      <div className="container hero-centered-container">
        {/* 1. Top Pill Badge (Exact Achievers layout) */}
        <div className="achievers-pill-badge">
          <span className="pill-dot-pulse" aria-hidden="true" />
          <span>PRACTICAL TECH & CREATIVE STUDIO — NASHIK'S LEADING PLATFORM</span>
        </div>

        {/* 2. Main Title with Underline Rule (Exact Achievers layout) */}
        <h1 className="achievers-hero-title">
          <span className="title-orange">Where Classroom Theory</span>{' '}
          <span className="title-dark">Meets</span>{' '}
          <span className="title-orange title-italic">Real Agency Workflows</span>
        </h1>
        <div className="achievers-title-underline" aria-hidden="true" />

        {/* 3. Typewriter Line with Blinking Cursor (Apply Now for Teache| style) */}
        <div className="achievers-typewriter-line">
          <span className="typewriter-lead">Apply Now for </span>
          <span className="typewriter-highlight">{currentText}</span>
          <span className="typewriter-cursor">|</span>
        </div>

        {/* 4. Centered Paragraph Description */}
        <p className="achievers-hero-desc">
          Practical tech and creative training on live agency briefs in Nashik. Real workflows, direct industry mentorship, zero theory fluff.
        </p>

        {/* 5. Dual Buttons (Left Primary Accent, Right Dark Navy) */}
        <div className="achievers-cta-group">
          <a
            href="#courses"
            className="btn btn-achievers-primary btn-shimmer"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('courses');
              else document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <GraduationCap size={20} />
            <span>Explore Programs</span>
          </a>

          <a
            href="#enquiry"
            className="btn btn-achievers-secondary"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('enquiry');
              else document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Users size={18} />
            <span>Book Career Counselling</span>
          </a>
        </div>

        {/* 6. Centered Quick Trust Badges Strip */}
        <div className="achievers-trust-strip">
          <div className="trust-pill">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>100% Practical Studio Workflows</span>
          </div>
          <div className="trust-pill">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>Direct Industry Mentorship</span>
          </div>
          <div className="trust-pill">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>Live Client Portfolios</span>
          </div>
          <div className="trust-pill">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>3–6 Mo Internship Pathways</span>
          </div>
        </div>

        {/* 7. Centered Metrics Counter Strip */}
        <div className="achievers-stats-bar">
          <div className="stat-unit">
            <span className="stat-unit-num">100%</span>
            <span className="stat-unit-lbl">Practical Studio Model</span>
          </div>
          <div className="stat-unit-sep" />
          <div className="stat-unit">
            <span className="stat-unit-num">50+</span>
            <span className="stat-unit-lbl">Live Client Projects</span>
          </div>
          <div className="stat-unit-sep" />
          <div className="stat-unit">
            <span className="stat-unit-num">12+</span>
            <span className="stat-unit-lbl">Industry Mentors</span>
          </div>
          <div className="stat-unit-sep" />
          <div className="stat-unit">
            <span className="stat-unit-num">6+</span>
            <span className="stat-unit-lbl">Specialized Tracks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
