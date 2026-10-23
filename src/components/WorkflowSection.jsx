import React, { useState, useEffect } from 'react';
import { WORKFLOW_STAGES } from '../data/servicesData';
import { GitBranch, Calendar, Clock, ArrowRight, CheckCircle2, Sparkles, Laptop } from 'lucide-react';

const WORKFLOW_INTERACTIVE_DETAILS = [
  {
    stepNum: 1,
    tag: 'Step 1 • Profile & Tools',
    title: 'Consultation & Track Selection',
    shortDesc: 'Explore by interest, specialization, and career goals. Shortlist technical or creative tracks quickly.',
    deepDesc: 'Schedule a discovery session with a senior mentor to assess your background and choose between Web Development, UI/UX, 3D CGI, or Digital Marketing.',
    badgeLabel: 'Duration: 1-on-1 Profile Mapping',
    icon: Laptop
  },
  {
    stepNum: 2,
    tag: 'Step 2 • Studio Immersion',
    title: 'Live Studio Briefs & Workflows',
    shortDesc: 'Work on authentic briefs derived from real client requirements, agile sprints, and production standards.',
    deepDesc: 'Step directly into active agency pipelines. No simulated toys — you work on actual client specifications, design systems, and modern coding repositories.',
    badgeLabel: 'Schedule: Interactive Studio Walkthrough',
    icon: Calendar
  },
  {
    stepNum: 3,
    tag: 'Step 3 • Iteration & Review',
    title: 'Senior Mentorship & Code Reviews',
    shortDesc: 'Get regular feedback, 1-on-1 pull-request reviews, and polish deliverables with active agency leads.',
    deepDesc: 'Weekly code reviews, design critique sessions, and performance audits ensure your output meets production-grade engineering and visual benchmarks.',
    badgeLabel: 'Mentorship: Direct Lead Oversight',
    icon: Sparkles
  },
  {
    stepNum: 4,
    tag: 'Step 4 • Production Capstone',
    title: 'Portfolio Capstone & Internship',
    shortDesc: 'Graduate with a verified, public client portfolio and access to 3-to-6 month studio internship pathways.',
    deepDesc: 'Present your completed deliverables to hiring managers and enterprise partners. Top graduates transition directly into paid agency client projects.',
    badgeLabel: 'Pathway: 3–6 Mo Studio Internship',
    icon: CheckCircle2
  }
];

export default function WorkflowSection({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(1); // Default to Step 2 (0-indexed 1) matching reference screenshot!
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance step smoothly every 5 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_INTERACTIVE_DETAILS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentItem = WORKFLOW_INTERACTIVE_DETAILS[activeStep];

  return (
    <section id="workflow" className="section-py workflow-interactive-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>The 4-Stage Studio Methodology</span>
          </span>
          <h2 className="section-title">
            How Learning <span className="title-orange">Works for Students</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '320px' }} aria-hidden="true" />
          <p className="section-subtitle">
            From foundation basics to live agency briefs and portfolio reviews. Clear, predictable, zero fluff.
          </p>
        </div>

        {/* 2-Column Interactive Workflow Layout (Inspired by reference screenshot) */}
        <div 
          className="workflow-interactive-grid"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Interactive Step Cards */}
          <div className="workflow-steps-list">
            {WORKFLOW_INTERACTIVE_DETAILS.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`interactive-step-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveStep(idx);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  <div className={`step-number-box ${isActive ? 'number-active' : ''}`}>
                    {item.stepNum}
                  </div>
                  <div className="step-card-text">
                    <h3 className="step-card-title">{item.title}</h3>
                    <p className="step-card-desc">{item.shortDesc}</p>
                  </div>
                </div>
              );
            })}

            <div className="workflow-action-left">
              <a
                href="#enquiry"
                className="btn btn-achievers-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('enquiry');
                }}
              >
                <span>Book a Free Studio Demo</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Layered 3D Dark Preview Cards Stack (Exact reference screenshot) */}
          <div className="workflow-preview-column">
            <div className="preview-cards-stack">
              {/* Offset decorative background stack cards */}
              <div className="stack-card-layer layer-3" aria-hidden="true" />
              <div className="stack-card-layer layer-2" aria-hidden="true" />

              {/* Active Front Dark Card */}
              <div className="stack-card-front" key={activeStep}>
                <div className="stack-card-top-row">
                  <span className="stack-step-tag">
                    <Calendar size={14} />
                    <span>STEP {currentItem.stepNum}</span>
                  </span>
                  <span className="stack-circle-indicator">
                    {currentItem.stepNum}
                  </span>
                </div>

                <h3 className="stack-card-title">{currentItem.title}</h3>
                <p className="stack-card-desc">{currentItem.deepDesc}</p>

                <div className="stack-card-bottom-pill">
                  <Clock size={16} className="pill-clock-icon" />
                  <span>{currentItem.badgeLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
