import React from 'react';
import { FolderGit2, Layout, Film, TrendingUp, Award, UserCheck, CheckCircle2 } from 'lucide-react';

export default function LearningOutcomes() {
  const outcomes = [
    {
      icon: <FolderGit2 size={24} />,
      title: 'Production GitHub Repositories',
      desc: 'Clean, modular, well-documented source code repositories displaying proper branch conventions, pull requests, and automated deployment.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Interactive Figma Product Systems',
      desc: 'Industry-standard UI kits, responsive component libraries, and end-to-end user experience case studies demonstrating design thinking.'
    },
    {
      icon: <Film size={24} />,
      title: 'Commercial 3D & CGI Showreel',
      desc: 'High-definition video showreel featuring hard-surface models, photorealistic textures, dynamic physics, and commercial product animations.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Audited Marketing Case Studies',
      desc: 'Data-backed campaign briefs showing audience segmentation, SEO rank gains, A/B ad creative tests, and conversion optimization reports.'
    },
    {
      icon: <Award size={24} />,
      title: 'Verified Certificate & Agency Credentials',
      desc: 'Formal certification from Visiomatix Media validating verified hours of hands-on project work and demonstrated competence.'
    },
    {
      icon: <UserCheck size={24} />,
      title: '1-on-1 Portfolio & Interview Coaching',
      desc: 'Direct resume critiques, LinkedIn profile optimization, and simulated technical/creative interview rounds with hiring practitioners.'
    }
  ];

  return (
    <section className="section-py outcomes-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>Tangible Learning Deliverables</span>
          </span>
          <h2 className="section-title">
            What You <span className="title-orange">Walk Away With</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '300px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Hiring managers don't hire generic certificates; they hire proven capability. Every milestone at Visiomatix is engineered to build verifiable proof of your skill.
          </p>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((item, idx) => (
            <div key={idx} className="outcome-card">
              <div className="outcome-icon-bubble">
                {item.icon}
              </div>
              <h3 className="outcome-card-title">{item.title}</h3>
              <p className="outcome-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
