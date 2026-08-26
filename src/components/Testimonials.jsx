import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Ali Khan',
    role: 'Homeowner, DHA Lahore',
    city: 'Lahore',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    quote: 'ZIK Paints gives excellent coverage and beautiful finish. Painted our entire 2 Kanal home with ZIK Silk Touch and Weather Shield. Even after heavy rains, the exterior looks like brand new. Highly recommended!',
    verified: true,
    projectType: 'Full Home Painting'
  },
  {
    id: 2,
    name: 'Ar. Sarah Ahmed',
    role: 'Principal Architect, Studio Arch',
    city: 'Islamabad',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    quote: 'As an architect, color fidelity and matte smoothness are everything to me. ZIK Royal Matt delivers exceptional non-reflective depth that our clients adore. The low odor formula made move-in possible within 48 hours.',
    verified: true,
    projectType: 'Commercial & Luxury Residences'
  },
  {
    id: 3,
    name: 'Engr. Tariq Mahmood',
    role: 'Project Director, Skyline Builders',
    city: 'Karachi',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    quote: 'We tested 4 major paint brands for humidity and salt resistance along the Karachi coast. ZIK Weather Shield outperformed all competitors in adhesion and anti-fungal longevity.',
    verified: true,
    projectType: 'High-Rise Commercial Plaza'
  },
  {
    id: 4,
    name: 'Mian Bilal Hussain',
    role: 'Interior Contractor',
    city: 'Faisalabad',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    quote: 'ZIK Smooth Wall Putty and Aqueous Primer make the painter’s job so easy. Spreading is effortless and consumption is lower because of the high polymer solids. Best value for money in Pakistan.',
    verified: true,
    projectType: 'Contractor Partner'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <div className="section-badge">
              Customer Trust
            </div>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Hear directly from Pakistani homeowners, architects, and paint contractors who rely on ZIK Paints.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={prevTestimonial}
              className="action-btn"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="action-btn"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, idx) => (
            <div key={item.id} className="testimonial-card">
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', color: '#F59E0B', gap: '2px', marginBottom: '0.75rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <Quote size={24} color="#CBD5E1" />

                <p className="testimonial-quote">
                  "{item.quote}"
                </p>
              </div>

              <div className="testimonial-user">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="testimonial-avatar" 
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="testimonial-name">{item.name}</span>
                    <CheckCircle size={14} color="#10B981" />
                  </div>
                  <span className="testimonial-role">{item.role} • {item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
