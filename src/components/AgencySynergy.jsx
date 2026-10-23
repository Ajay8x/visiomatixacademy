import React, { useState } from 'react';
import { Palette, Cpu, Sparkles, Film, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AGENCY_SERVICES } from '../data/servicesData';

export default function AgencySynergy({ onNavigate }) {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [
    <Palette size={20} />,
    <Film size={20} />,
    <Cpu size={20} />
  ];

  return (
    <section id="services" className="section-py section-bg-subtle agency-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>Dual Model: Agency & Academy</span>
          </span>
          <h2 className="section-title">
            Digital Services, CGI Production & <span className="title-orange">IT Solutions</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '340px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Visiomatix Media is an active creative agency delivering enterprise web solutions, marketing campaigns, and commercial 3D/CGI visual effects to growing brands.
          </p>
        </div>

        {/* Agency Synergy Explanation Banner */}
        <div className="synergy-banner">
          <div className="synergy-banner-text">
            <h3 className="synergy-banner-title">The Visiomatix Studio Advantage</h3>
            <p className="synergy-banner-p">
              Because we run live commercial client operations, our academy students learn alongside active agency campaigns, real web platforms, and commercial CGI pipelines. This eliminates the gap between classroom theory and employment reality.
            </p>
          </div>
          <div className="synergy-banner-cta">
            <a
              href="#workflow"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('workflow');
              }}
            >
              <span>Explore Studio Workflow</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Tabbed Interactive Services Navigator */}
        <div className="services-tabs-wrap">
          <div className="services-tab-buttons" role="tablist">
            {AGENCY_SERVICES.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeTab === idx}
                className={`service-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="tab-icon">{categoryIcons[idx]}</span>
                <span className="tab-label">{cat.category}</span>
              </button>
            ))}
          </div>

          <div className="service-tab-content">
            <div className="service-content-header">
              <div>
                <span className="service-tagline-badge">
                  {AGENCY_SERVICES[activeTab].tagline}
                </span>
                <h3 className="service-category-heading">
                  {AGENCY_SERVICES[activeTab].category}
                </h3>
              </div>
              <p className="service-category-desc">
                {AGENCY_SERVICES[activeTab].description}
              </p>
            </div>

            <div className="services-sub-grid">
              {AGENCY_SERVICES[activeTab].services.map((srv, sIdx) => (
                <div key={sIdx} className="service-sub-card">
                  <div className="service-sub-title-wrap">
                    <CheckCircle2 size={18} className="service-check" />
                    <h4 className="service-sub-title">{srv.title}</h4>
                  </div>
                  <p className="service-sub-desc">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
