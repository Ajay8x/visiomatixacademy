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
            Transforming how aspiring talent transitions into high-growth creative and tech careers.
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
                <strong>Visiomatix Media</strong> is a digital studio and academy offering industry training across web development, UI/UX systems, commercial CGI, and digital marketing.
              </p>

              <p>
                Students train on live client briefs, agile sprints, and production standards—giving freshers and career-switchers direct corporate experience and proven portfolio credentials.
              </p>
            </div>

            <div className="about-studio-dna">
              <div className="dna-item">
                <span className="dna-title">Headquarters</span>
                <span className="dna-value">Chandwad, Nashik, Maharashtra</span>
              </div>
              <div className="dna-item">
                <span className="dna-title">Operating Model</span>
                <span className="dna-value">
                  <span className="dna-live-dot" aria-hidden="true" />
                  Active Digital Agency + Tech Academy
                </span>
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
                  No toy projects. Train on Git conventions, agile sprints, and production-ready client deliverables.
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
                  Work directly alongside active full-stack engineers, CGI artists, and growth directors.
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
                  Graduate with verified web apps, Figma systems, and commercial CGI showreels that impress recruiters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
