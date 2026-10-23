import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/faqsData';

export default function FaqSection({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="faqs" className="section-py faq-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="section-title">
            Common Questions & <span className="title-orange">Transparent Answers</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '340px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Everything you need to know about our studio format, syllabus, tools, prerequisites, and enrolment.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`faq-answer-container ${isOpen ? 'visible' : ''}`}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-more-help">
          <p>Still have questions about our upcoming batches or curriculum?</p>
          <a
            href="#enquiry"
            className="btn btn-secondary btn-sm"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('enquiry');
            }}
          >
            <span>Ask Admissions Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
}
