import React from 'react';
import { X, Clock, Laptop, BookOpen, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose, onEnquire }) {
  if (!isOpen || !course) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="modal-badge">
              <Sparkles size={13} />
              <span>{course.badge}</span>
            </div>
            <h3 id="modal-title" className="modal-title">{course.title}</h3>
            <div className="modal-meta">
              <span className="modal-meta-item">
                <Clock size={15} />
                <span>Duration: {course.duration}</span>
              </span>
              <span className="modal-meta-item">
                <Laptop size={15} />
                <span>Format: {course.mode}</span>
              </span>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Course Details"
          >
            <X size={20} />
          </button>
        </div>

        {course.image && (
          <div className="modal-media-banner">
            <img src={course.image} alt={course.title} className="modal-media-img" />
          </div>
        )}

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Program Overview</h4>
            <p className="modal-text">{course.shortDesc}</p>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Key Practical Outcomes</h4>
            <ul className="modal-outcomes-list">
              {course.outcomes.map((outcome, idx) => (
                <li key={idx} className="modal-outcome-item">
                  <CheckCircle size={16} className="outcome-check" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">
              <BookOpen size={16} />
              <span>Curriculum & Module Breakdown</span>
            </h4>
            <div className="modal-modules-accordion">
              {course.modules.map((mod, idx) => (
                <div key={idx} className="module-item">
                  <div className="module-item-header">
                    <span className="module-num">{idx + 1}</span>
                    <span className="module-name">{mod.title}</span>
                  </div>
                  <div className="module-item-body">
                    {mod.topics.map((topic, tIdx) => (
                      <p key={tIdx} className="module-topic-text">• {topic}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Tools & Technologies Covered</h4>
            <div className="modal-tools-wrap">
              {course.skills.map((skill, idx) => (
                <span key={idx} className="modal-tool-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              onClose();
              if (onEnquire) onEnquire(course);
            }}
          >
            <span>Enquire for This Program</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
