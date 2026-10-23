import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Sparkles, Clock, Info } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { COMPANY_DETAILS } from '../data/faqsData';

export default function EnquirySection({ preselectedCourse }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: preselectedCourse ? preselectedCourse.id : COURSES[0].id,
    background: 'student',
    modePreference: 'classroom',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update course when preselected from another section
  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, courseId: preselectedCourse.id }));
    }
  }, [preselectedCourse]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/\D/g, '').slice(-10))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      courseId: COURSES[0].id,
      background: 'student',
      modePreference: 'classroom',
      message: ''
    });
    setErrors({});
  };

  const currentCourse = COURSES.find(c => c.id === formData.courseId) || COURSES[0];

  return (
    <section id="enquiry" className="section-py section-bg-subtle enquiry-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>Admissions & Career Desk</span>
          </span>
          <h2 className="section-title">
            Book a Free 1-on-1 <span className="title-orange">Profile Counselling Session</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '340px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Get personalized career clarity, review sample studio project briefs, and reserve your seat for the next batch at our Nashik campus.
          </p>
        </div>

        <div className="enquiry-layout">
          {/* Left Column: Direct Contact & Location Details */}
          <div className="enquiry-contact-card">
            <h3 className="contact-card-title">Connect with Admissions</h3>
            <p className="contact-card-intro">
              Prefer speaking directly with an admissions mentor? Feel free to call, WhatsApp, or drop by our studio in Nashik.
            </p>

            <div className="contact-items-list">
              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Direct Phone & WhatsApp</span>
                  <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="contact-item-value">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Official Email</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="contact-item-value">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Studio & Training Center</span>
                  <address className="contact-item-address">
                    {COMPANY_DETAILS.address}
                  </address>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Hours of Operation</span>
                  <span className="contact-item-value">{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Practical Studio Notice */}
            <div className="studio-trust-callout">
              <strong>Studio Campus Note:</strong> Our lab spaces are equipped for hands-on development, UI prototyping, and 3D rendering. Walk-in consultations are welcome during standard hours.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="enquiry-form-card">
            {/* Demo Notice Banner */}
            <div className="demo-notice-bar" role="status">
              <Info size={16} className="demo-icon" />
              <span>
                <strong>Demo Mode Active:</strong> Form validates and displays full client feedback. To connect to an active CRM or backend endpoint, configure the webhook in settings.
              </span>
            </div>

            {isSuccess ? (
              <div className="enquiry-success-state" role="alert">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="success-icon" />
                </div>
                <h3 className="success-title">Inquiry Submitted Successfully!</h3>
                <p className="success-desc">
                  Thank you, <strong>{submittedData?.fullName}</strong>. Your inquiry for <strong>{currentCourse.title}</strong> has been received in demo mode.
                </p>
                
                <div className="success-summary-box">
                  <div className="summary-row">
                    <span>Contact Phone:</span>
                    <strong>{submittedData?.phone}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Email Address:</span>
                    <strong>{submittedData?.email}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Background:</span>
                    <strong className="capitalize">{submittedData?.background}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Format:</span>
                    <strong className="capitalize">{submittedData?.modePreference}</strong>
                  </div>
                </div>

                <p className="success-followup">
                  Our admissions counsellor will connect with you on WhatsApp / Phone to discuss batch timings and provide the curriculum breakdown.
                </p>

                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  onClick={handleReset}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="enquiry-form">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                    placeholder="e.g. Rahul Patil"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="form-error-msg">
                      <AlertCircle size={14} /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error-msg">
                        <AlertCircle size={14} /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      WhatsApp / Mobile <span className="required-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error-msg">
                        <AlertCircle size={14} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="courseId" className="form-label">
                    Select Program Track <span className="required-star">*</span>
                  </label>
                  <select
                    id="courseId"
                    name="courseId"
                    className="form-select"
                    value={formData.courseId}
                    onChange={handleChange}
                  >
                    {COURSES.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.title} — {course.duration}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="background" className="form-label">
                      Current Status
                    </label>
                    <select
                      id="background"
                      name="background"
                      className="form-select"
                      value={formData.background}
                      onChange={handleChange}
                    >
                      <option value="student">College Student</option>
                      <option value="fresher">Recent Graduate / Fresher</option>
                      <option value="professional">Working Professional</option>
                      <option value="career-switcher">Career Switcher</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="modePreference" className="form-label">
                      Learning Format
                    </label>
                    <select
                      id="modePreference"
                      name="modePreference"
                      className="form-select"
                      value={formData.modePreference}
                      onChange={handleChange}
                    >
                      <option value="classroom">Nashik Campus (Classroom Lab)</option>
                      <option value="hybrid">Hybrid (Studio + Remote Projects)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Questions or Specific Goals (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="form-textarea"
                    placeholder="Tell us about your learning goals or any questions about the curriculum..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="submit-spinner" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry & Request Callback</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="form-privacy-note">
                  🔒 Your contact information is kept strictly private and used only for program guidance.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
