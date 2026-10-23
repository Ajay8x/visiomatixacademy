import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Harsh Singh',
    initials: 'HS',
    avatarBg: '#ea580c',
    rating: 5,
    timeAgo: 'Yesterday',
    text: 'Great practical learning with live projects. The mentors from Visiomatix agency helped me master full-stack React and crack my first developer role.',
    ownerReply: {
      author: 'Visiomatix Academy (Studio Lead)',
      message: 'Thank you Harsh for your wonderful review! Proud to see you working on live studio builds.'
    }
  },
  {
    id: 2,
    name: 'Kajal Singh',
    initials: 'KS',
    avatarBg: '#059669',
    rating: 5,
    timeAgo: '2 days ago',
    text: 'Affordable fees and industry-grade curriculum. Learning Figma design systems and UX prototyping directly on real client briefs was an incredible experience.',
    ownerReply: {
      author: 'Visiomatix Academy (Owner)',
      message: 'Thanks Kajal for sharing your experience! Keep creating amazing product designs.'
    }
  },
  {
    id: 3,
    name: 'Om Prajapati',
    initials: 'OP',
    avatarBg: '#2563eb',
    rating: 5,
    timeAgo: '5 hours ago',
    text: 'Best CGI and 3D modeling track in the region. The Blender and commercial VFX lighting workflows are taught at real agency production standards.',
    ownerReply: {
      author: 'Visiomatix Academy (CGI Lead)',
      message: 'Hi Om, thank you for your feedback! Best of luck for your commercial 3D reel.'
    }
  },
  {
    id: 4,
    name: 'Priya Sharma',
    initials: 'PS',
    avatarBg: '#7c3aed',
    rating: 5,
    timeAgo: '3 days ago',
    text: 'The performance marketing and GA4 analytics training gave me real campaign management experience. I landed a paid agency internship within 3 months!',
    ownerReply: {
      author: 'Visiomatix Academy (Growth Head)',
      message: 'Congratulations Priya! Excellent work on your Meta and Google Ads capstone.'
    }
  },
  {
    id: 5,
    name: 'Rohit Verma',
    initials: 'RV',
    avatarBg: '#d97706',
    rating: 5,
    timeAgo: '1 week ago',
    text: 'Full stack development with modern React and Node.js was taught step by step. No boring theory, only real production commits and weekly code reviews.',
    ownerReply: {
      author: 'Visiomatix Academy (Tech Director)',
      message: 'Proud of your dedication Rohit! Your portfolio of production apps is exceptional.'
    }
  },
  {
    id: 6,
    name: 'Ananya Deshmukh',
    initials: 'AD',
    avatarBg: '#db2777',
    rating: 5,
    timeAgo: '4 days ago',
    text: 'Brand identity systems and vector typography in Illustrator transformed my creative portfolio. I now handle freelance design briefs with full confidence.',
    ownerReply: {
      author: 'Visiomatix Academy (Design Mentor)',
      message: 'Keep shining Ananya! Your logo systems and packaging decks look world-class.'
    }
  }
];

export default function TestimonialsSection() {
  // Duplicate for seamless infinite right-moving loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-py testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <span className="pill-dot-pulse" aria-hidden="true" />
            <span>VERIFIED EXPERIENCES</span>
          </span>
          <h2 className="section-title">
            Testimonial <span className="title-orange">Reviews</span>
          </h2>
          <div className="achievers-title-underline" style={{ maxWidth: '280px' }} aria-hidden="true" />
          <p className="section-subtitle">
            Authentic feedback from graduates, studio interns, and industry professionals trained under Visiomatix agency mentors.
          </p>
        </div>
      </div>

      {/* Continuous Infinite Right-Sliding Marquee Track */}
      <div className="testimonials-slider-wrapper">
        <div className="testimonials-slider-track">
          {duplicatedReviews.map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="testimonial-card">
              <div className="testimonial-card-top">
                <div 
                  className="testimonial-avatar" 
                  style={{ backgroundColor: review.avatarBg }}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div className="testimonial-user-info">
                  <h4 className="testimonial-name">{review.name}</h4>
                  <span className="testimonial-count">Verified Graduate</span>
                </div>
              </div>

              {/* Star Rating & Timestamp */}
              <div className="testimonial-rating-row">
                <div className="testimonial-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={15} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="testimonial-time">{review.timeAgo}</span>
              </div>

              {/* Review Text */}
              <p className="testimonial-text">{review.text}</p>

              {/* Studio Owner Response Box */}
              {review.ownerReply && (
                <div className="testimonial-reply-box">
                  <span className="reply-author">{review.ownerReply.author}</span>
                  <p className="reply-message">{review.ownerReply.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
