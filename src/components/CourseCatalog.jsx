import React, { useState } from 'react';
import { Clock, Laptop, ArrowRight, Eye, Sparkles, Database, Layers, TrendingUp, PenTool, BookOpen } from 'lucide-react';
import { COURSES, COURSE_CATEGORIES } from '../data/coursesData';
import CourseModal from './CourseModal';

export default function CourseCatalog({ onSelectCourse, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const filteredCourses = activeCategory === 'all' 
    ? COURSES 
    : COURSES.filter(course => course.category === activeCategory);

  const handleEnquireCourse = (course) => {
    if (onSelectCourse) onSelectCourse(course);
    if (onNavigate) {
      onNavigate('enquiry');
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCourseIcon = (id) => {
    switch (id) {
      case 'full-stack-web-dev':
        return <Laptop size={18} />;
      case 'ui-ux-design-figma':
        return <Layers size={18} />;
      case 'digital-marketing-growth':
        return <TrendingUp size={18} />;
      case 'cgi-vfx-3d-modeling':
        return <Sparkles size={18} />;
      case 'data-analytics-bi':
        return <Database size={18} />;
      case 'graphic-design-branding':
        return <PenTool size={18} />;
      default:
        return <Laptop size={18} />;
    }
  };

  return (
    <section id="courses" className="section-py courses-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>Verified Career Tracks</span>
          </span>
          <h2 className="section-title">
            Industry-Aligned Programs Built for <span className="title-orange">Employment</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '340px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Curated practical tracks in technology, design, digital marketing, and creative CGI visual effects. Each program is rooted in hands-on studio production.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="course-filters" role="tablist" aria-label="Course Categories">
          {COURSE_CATEGORIES.map(category => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Courses Slider Container - Continuous Right-Sliding Animation */}
        <div className="courses-slider-wrapper">
          <div className="courses-slider-track">
            {(activeCategory === 'all' ? [...COURSES, ...COURSES] : [...filteredCourses, ...filteredCourses, ...filteredCourses]).map((course, idx) => (
              <div key={`${course.id}-${idx}`} className="course-card-compact">
                {course.image && (
                  <div className="course-card-media-compact">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-card-img"
                      loading="lazy"
                    />
                    <div className="course-card-media-overlay" aria-hidden="true" />
                    <span className="course-compact-badge">{course.badge}</span>
                    <span className="course-compact-duration">
                      <Clock size={12} />
                      <span>{course.duration}</span>
                    </span>
                  </div>
                )}

                <div className="course-card-body-compact">
                  <div className="course-card-title-row">
                    <div className="course-icon-badge" aria-hidden="true">
                      {getCourseIcon(course.id)}
                    </div>
                    <h3 className="course-title-compact">{course.title}</h3>
                  </div>

                  <p className="course-desc-compact">{course.shortDesc}</p>

                  <div className="course-compact-actions">
                    <button
                      type="button"
                      className="course-compact-btn-primary"
                      onClick={() => handleEnquireCourse(course)}
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      type="button"
                      className="course-compact-syllabus-link"
                      onClick={() => setSelectedCourseForModal(course)}
                      aria-label={`View full syllabus for ${course.title}`}
                    >
                      <BookOpen size={13} />
                      <span>View Syllabus</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Details Modal */}
      <CourseModal
        course={selectedCourseForModal}
        isOpen={Boolean(selectedCourseForModal)}
        onClose={() => setSelectedCourseForModal(null)}
        onEnquire={handleEnquireCourse}
      />
    </section>
  );
}
