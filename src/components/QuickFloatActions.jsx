import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/faqsData';

export default function QuickFloatActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
    'Hi Visiomatix Team, I would like to enquire about your practical training courses and upcoming batches.'
  )}`;

  return (
    <aside className="quick-float-container" aria-label="Quick Communication Actions">
      {/* WhatsApp Quick Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        title="Chat with Admissions on WhatsApp"
        aria-label="Chat with Admissions on WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="float-tooltip">WhatsApp Us</span>
      </a>

      {/* Call Direct Action */}
      <a
        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
        className="float-btn float-call"
        title="Call Admissions Desk"
        aria-label="Call Admissions Desk"
      >
        <Phone size={20} />
        <span className="float-tooltip">Call Now</span>
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          className="float-btn float-scrolltop"
          onClick={scrollToTop}
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </aside>
  );
}
