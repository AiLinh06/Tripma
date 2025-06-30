// src/components/FlightSection/FlightSection.js
import React from 'react';
import './FlightSection.css';

const flights = [
  {
    airlineLogo: require('../../assets/Hawaiian Airlines.png'),
    departureTime: '7:00 AM',
    arrivalTime: '9:30 AM',
    price: '$120',
    stop: '1 stop',
  },
  {
    airlineLogo: require('../../assets/Japan Airlines.png'),
    departureTime: '8:15 AM',
    arrivalTime: '10:45 AM',
    price: '$135',
    stop: '1 stop',
  },
  {
    airlineLogo: require('../../assets/Delta Airlines.png'),
    departureTime: '9:00 AM',
    arrivalTime: '11:30 AM',
    price: '$110',
    stop: 'Non-stop',
  },
  {
    airlineLogo: require('../../assets/united airlines.png'),
    departureTime: '10:30 AM',
    arrivalTime: '1:00 PM',
    price: '$150',
    stop: 'Non-stop',
  },
];

const FlightSection = () => {
  return (
    <section className="flight-section">
      <h2>Popular Flights</h2>
      <div className="flights-grid">
        {flights.map((flight, index) => (
          <div className="flight-card" key={index}>
            <img src={flight.airlineLogo} alt="Airline Logo" className="airline-logo" />
            <div className="flight-details">
              <span className="flight-time">{flight.departureTime} - {flight.arrivalTime}</span>
              <span className="flight-price">{flight.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightSection;
