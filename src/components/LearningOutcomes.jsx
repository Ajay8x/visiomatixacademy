import React from 'react';
import { FolderGit2, Layout, Film, TrendingUp, Award, UserCheck, CheckCircle2 } from 'lucide-react';

export default function LearningOutcomes() {
  const outcomes = [
    {
      icon: <FolderGit2 size={24} />,
      title: 'Production GitHub Repositories',
      desc: 'Clean source code repositories with proper branch conventions, PR reviews, and automated deployment.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Interactive Figma Product Systems',
      desc: 'Scalable UI component libraries, design tokens, and end-to-end UX case studies.'
    },
    {
      icon: <Film size={24} />,
      title: 'Commercial 3D & CGI Showreel',
      desc: 'HD commercial showreel featuring photorealistic 3D assets, lighting, and physics simulations.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Audited Marketing Case Studies',
      desc: 'Data-driven campaign case studies with audience targeting, SEO gains, and conversion metrics.'
    },
    {
      icon: <Award size={24} />,
      title: 'Verified Certificate & Agency Credentials',
      desc: 'Official certification from Visiomatix Media validating verified practical studio hours.'
    },
    {
      icon: <UserCheck size={24} />,
      title: '1-on-1 Portfolio & Interview Coaching',
      desc: 'Personal resume critiques, LinkedIn profile polish, and mock technical interview rounds.'
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
            Every milestone is engineered to build verifiable proof of capability for hiring managers.
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
