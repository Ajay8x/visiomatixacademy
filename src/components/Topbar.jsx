import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/faqsData';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-announcement">
          <span className="topbar-badge">
            <Sparkles size={13} className="topbar-badge-icon" /> New Batch
          </span>
          <span className="topbar-text">
            Admissions Open for Practical Tech & Creative Media Tracks • Nashik Campus
          </span>
        </div>

        <div className="topbar-contacts">
          <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="topbar-link" title="Call Admissions Desk">
            <Phone size={13} />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <span className="topbar-divider">|</span>
          <a href={`mailto:${COMPANY_DETAILS.email}`} className="topbar-link" title="Email Us">
            <Mail size={13} />
            <span>{COMPANY_DETAILS.email}</span>
          </a>
          <span className="topbar-divider">|</span>
          <span className="topbar-location">
            <MapPin size={13} />
            <span>{COMPANY_DETAILS.locationCity}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
