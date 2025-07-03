// src/components/FlightSection/FlightSection.js
import React from 'react';
import './FlightSection.css';

const flights = [
  {
    airlineLogo: require('../../assets/Hawaiian Airlines.png'),
    airlineName: 'Hawaiian Airlines',
    departureTime: '7:00 AM',
    arrivalTime: '2:30 PM',
    duration: '7h 30m',
    price: '$220',
    stop: '1 stop',
  },
  {
    airlineLogo: require('../../assets/Japan Airlines.png'),
    airlineName: 'Japan Airlines',
    departureTime: '8:15 AM',
    arrivalTime: '18:45 PM',
    duration: '8h 30m',
    price: '$235',
    stop: '1 stop',
  },
  {
    airlineLogo: require('../../assets/Delta Airlines.png'),
    airlineName: 'Delta Airlines',
    departureTime: '9:00 AM',
    arrivalTime: '11:30 AM',
    duration: '2h 30m',
    price: '$110',
    stop: 'Nonstop',
  },
  {
    airlineLogo: require('../../assets/united airlines.png'),
    airlineName: 'United Airlines',
    departureTime: '10:30 AM',
    arrivalTime: '2:00 PM',
    duration: '3h 30m',
    price: '$150',
    stop: 'Nonstop',
  },
];

const FlightSection = () => {
  return (
    <section className="flight-section">
      <h2>Choose a departing flight</h2>
      <div className="flights-grid">
        {flights.map((flight, index) => (
          <div className="flight-card" key={index}>
            <img src={flight.airlineLogo} alt="Airline Logo" className="airline-logo" />
            <div className="flight-details">
              <span className="flight-duration">{flight.duration}</span>
              <span className="flight-time">{flight.departureTime} - {flight.arrivalTime}</span>
              <span className="flight-stop">{flight.stop}</span>
              <span className="flight-price">{flight.price}</span>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightSection;
