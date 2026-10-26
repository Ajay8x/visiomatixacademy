import React from 'react';
import { ADMISSION_STEPS } from '../data/servicesData';
import { FileText, Compass, Calendar, Rocket, ArrowRight } from 'lucide-react';

export default function AdmissionsSteps({ onNavigate }) {
  const icons = [
    <FileText size={20} />,
    <Compass size={20} />,
    <Calendar size={20} />,
    <Rocket size={20} />
  ];

  return (
    <section id="admissions" className="section-py section-bg-subtle admissions-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>Clear & Transparent Process</span>
          </span>
          <h2 className="section-title">
            Admission & Enrolment in <span className="title-orange">4 Simple Steps</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '340px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Transparent guidance over pushy sales. Your onboarding in 4 simple steps.
          </p>
        </div>

        <div className="admissions-grid">
          {ADMISSION_STEPS.map((step, idx) => (
            <div key={idx} className="admission-step-card">
              <div className="admission-card-header">
                <span className="admission-step-pill">{step.number}</span>
                <div className="admission-icon-bubble">
                  {icons[idx]}
                </div>
              </div>
              <h3 className="admission-step-title">{step.title}</h3>
              <p className="admission-step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="admissions-footer-cta">
          <p className="admissions-cta-text">
            Have questions about upcoming batch dates or prerequisites?
          </p>
          <a
            href="#enquiry"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('enquiry');
            }}
          >
            <span>Start Step 1: Submit Inquiry</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
