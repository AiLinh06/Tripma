// src/components/DealsSection/DealsSection.js
import React from 'react';
import './DealsSection.css';

const deals = [
  {
    title: 'The Bund, Shanghai',
    description: 'China’s most international city',
    price: '$239',
    image: require('../../assets/shanghai.png'),
  },
  {
    title: 'Sydney Opera House, Sydney',
    description: 'Take in the views of Sydney',
    price: '$502',
    image: require('../../assets/sydney.png'),
    
  },
  {
    title: 'Kinkaku-ji Temple, Kyoto',
    description: 'Step back in time in Kyoto',
    price: '$633',
    image: require('../../assets/kyoto.png'),
  },
  {
    title: 'Tsavo East National Park, Kenya',
    description: 'Explore the savannah and wildlife',
    price: '$1,248',
    image: require('../../assets/kenya.png'),
  },
];

const DealsSection = () => {
  return (
    <section className="deals-section">
      <div className="deals-header">
        <h2>
          Find your next adventure with these <span className="highlight">flight deals</span>
        </h2>
        <a href="#" className="see-all">All ➜</a>
      </div>

      <div className="deals-grid">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <img src={deal.image} alt={deal.title} />
            <div className="deal-info">
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <strong>{deal.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
