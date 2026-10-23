import React from 'react';
import { Target, Users, Code, Sparkles, Building2, Layers } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-py section-bg-subtle about-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>About Visiomatix Media</span>
          </span>
          <h2 className="section-title">
            Bridging Learning & <span className="title-orange">Real-World Industry Execution</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '340px' }} aria-hidden="true" />
          <p className="section-subtitle">
            An established multidisciplinary creative and technology organization transforming how students, freshers, and professionals transition into high-growth careers.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Approved Information Card */}
          <div className="about-main-card">
            <div className="about-content-badge">
              <Sparkles size={14} />
              <span>Official Organization Statement</span>
            </div>

            <div className="about-paragraphs">
              <p className="lead font-medium">
                <strong>Visiomatix Media</strong> is a multidisciplinary creative and digital organization offering professional education alongside real-world industry exposure. With expertise in branding, digital marketing, CGI advertising, 3D modeling, motion graphics, VFX, and IT solutions, we bridge the gap between learning and employment.
              </p>

              <p>
                Our institute operates on real industry workflows, not classroom theory. We believe that the best way to learn is by doing—working on actual projects, collaborating with professionals, and experiencing the dynamics of a corporate environment.
              </p>

              <p>
                Whether you're a student looking to kickstart your career, a professional seeking to upskill, or someone looking to switch careers, Visiomatix Media provides the environment, mentorship, and opportunities to help you succeed.
              </p>
            </div>

            <div className="about-studio-dna">
              <div className="dna-item">
                <span className="dna-title">Headquarters</span>
                <span className="dna-value">Chandwad, Nashik, Maharashtra</span>
              </div>
              <div className="dna-item">
                <span className="dna-title">Operating Model</span>
                <span className="dna-value">Active Digital Agency + Tech Academy</span>
              </div>
              <div className="dna-item">
                <span className="dna-title">Training Philosophy</span>
                <span className="dna-value">100% Practical Client Sprints & Lab Hours</span>
              </div>
            </div>
          </div>

          {/* Three Core Pillars of Our Learning Philosophy */}
          <div className="about-pillars">
            <div className="about-pillar-card">
              <div className="pillar-card-icon-wrapper">
                <Target size={22} className="pillar-card-icon" />
              </div>
              <div>
                <h3 className="pillar-card-title">Real Industry Workflows</h3>
                <p className="pillar-card-desc">
                  No artificial toy assignments. You learn standard Git flows, agile sprints, client revision feedback, and production-ready deliverables.
                </p>
              </div>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-card-icon-wrapper">
                <Users size={22} className="pillar-card-icon" />
              </div>
              <div>
                <h3 className="pillar-card-title">Direct Senior Mentorship</h3>
                <p className="pillar-card-desc">
                  Work alongside active creative directors, front-end engineers, full-stack architects, and performance marketers on live studio challenges.
                </p>
              </div>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-card-icon-wrapper">
                <Layers size={22} className="pillar-card-icon" />
              </div>
              <div>
                <h3 className="pillar-card-title">Portfolio & Career Readiness</h3>
                <p className="pillar-card-desc">
                  Graduate with a publicly accessible, verifiable showcase—live web applications, Figma links, and CGI showreels that impress hiring managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
