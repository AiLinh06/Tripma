// src/components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Trish Cruz',
    location: 'West Covina · April 2019',
    text: 'It was a great experience using Tripma. I booked all my flights for my summer vacation through the app and it was seamless.',
  },
  {
    name: 'Kaori Miyazaki',
    location: 'Fukuoka · March 2019',
    text: 'As a solo traveler, I found it very easy and convenient to explore flight options. Tripma is now my go-to platform.',
  },
  {
    name: 'Anthony Lewis',
    location: 'Austin · June 2019',
    text: 'I’ve used many travel apps but Tripma stands out. The UI is super clean and booking is lightning fast. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Tripma users are saying</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{t.text}”</p>
            <div className="testimonial-user">
              <strong>{t.name}</strong>
              <span>{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
