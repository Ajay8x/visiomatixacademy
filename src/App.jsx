import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AboutSection from './components/AboutSection';
import CourseCatalog from './components/CourseCatalog';
import AgencySynergy from './components/AgencySynergy';
import WorkflowSection from './components/WorkflowSection';
import AdmissionsSteps from './components/AdmissionsSteps';
import LearningOutcomes from './components/LearningOutcomes';
import EnquirySection from './components/EnquirySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import QuickFloatActions from './components/QuickFloatActions';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-select course when user clicks "Apply Now" or "Enquire" from cards/hero
  const handleSelectCourse = (course) => {
    setSelectedCourseForEnquiry(course);
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'courses', 'services', 'about', 'workflow', 'admissions', 'enquiry', 'faqs', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="visiomatix-app">
      {/* 1. Top Contact & Announcement Bar */}
      <Topbar />

      {/* 2. Responsive Header Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {/* 3. High-Conversion Hero Section */}
        <Hero onSelectCourse={handleSelectCourse} onNavigate={handleNavigate} />

        {/* 4. Course & Career Program Discovery (Filterable) */}
        <CourseCatalog onSelectCourse={handleSelectCourse} onNavigate={handleNavigate} />

        {/* 5. Agency Synergy: Digital Services, CGI & IT Solutions */}
        <AgencySynergy onNavigate={handleNavigate} />

        {/* 6. Approved Organizational Statement & About Section */}
        <AboutSection />

        {/* 7. Hands-on 4-Stage Studio Methodology */}
        <WorkflowSection onNavigate={handleNavigate} />

        {/* 8. Tangible Learning Deliverables & Outcomes */}
        <LearningOutcomes />

        {/* 9. Transparent 4-Step Admission Journey */}
        <AdmissionsSteps onNavigate={handleNavigate} />

        {/* 10. Verified Student & Alumni Testimonial Reviews (Sliding Right) */}
        <TestimonialsSection />

        {/* 11. Interactive 1-on-1 Counselling & Admission Enquiry Form */}
        <EnquirySection preselectedCourse={selectedCourseForEnquiry} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection onNavigate={handleNavigate} />

        {/* Continuous Infinite Marquee Ticker at bottom above Footer */}
        <MarqueeTicker />
      </main>

      {/* 12. Spacious 4-Column Professional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 13. Floating Communication Actions (WhatsApp, Call, Top) */}
      <QuickFloatActions />
    </div>
  );
}
