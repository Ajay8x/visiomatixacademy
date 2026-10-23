import React from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Video, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Monitor, 
  Award,
  CheckCircle2
} from 'lucide-react';

const TICKER_ITEMS = [
  { icon: Code2, label: 'Full Stack Development', tag: 'React • Node • AI' },
  { icon: Palette, label: 'UI/UX Design Systems', tag: 'Figma • Wireframes' },
  { icon: Video, label: 'CGI & 3D Modeling', tag: 'Blender • VFX' },
  { icon: TrendingUp, label: 'Performance Marketing', tag: 'Meta & Google Ads' },
  { icon: Layers, label: 'Graphic & Brand Identity', tag: 'Photoshop • Illustrator' },
  { icon: Cpu, label: 'Data Analytics & BI', tag: 'Python • Power BI' },
  { icon: Monitor, label: '100% Practical Studio', tag: 'Real Agency Deliverables' },
  { icon: Award, label: 'Direct Industry Mentors', tag: '1-on-1 Code & Portfolio Reviews' },
  { icon: CheckCircle2, label: 'Placement Pathway', tag: '3–6 Mo Studio Internships' }
];

export default function MarqueeTicker() {
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="marquee-section" aria-label="Industry Tools and Studio Specializations">
      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="marquee-item">
                <span className="marquee-icon-box">
                  <Icon size={16} />
                </span>
                <span className="marquee-label">{item.label}</span>
                <span className="marquee-pill">{item.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
