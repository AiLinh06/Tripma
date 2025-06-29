// src/components/StaysSection/StaysSection.js
import React from 'react';
import './StaysSection.css';

const stays = [
  {
    title: 'Stay among the pods in Maldives',
    description: 'From the 2nd century AD, the islands were known as the "Money Isles" due to the abundance of cowry shells, a currency of the early ages.',
    image: require('../../assets/maldives.png'),
  },
  {
    title: 'Experience the Ouarzazate Valley in Morocco',
    description: 'Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.',
    image: require('../../assets/morocco.png'),
  },
  {
    title: 'Live traditionally in a Mongolian',
    description: 'Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.',
    image: require('../../assets/mongolia.png'),
  },
];

const StaysSection = () => {
  return (
    <section className="stays-section">
      <div className="stays-header">
        <h2>
          Explore unique <span className="highlight">places to stay</span>
        </h2>
        <a href="#" className="see-all">All ➜</a>
      </div>

      <div className="stays-grid">
        {stays.map((stay, index) => (
          <div className="stay-card" key={index}>
            <img src={stay.image} alt={stay.title} />
            <div className="stay-info">
              <h3>{stay.title}</h3>
              <p>{stay.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-more-wrapper">
        <button className="explore-more-btn">Explore more stays</button>
      </div>
    </section>
  );
};

export default StaysSection;
