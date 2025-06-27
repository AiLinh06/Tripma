import React from "react";

const SearchForm = () => {
  const airports = [
    "JFK - New York",
    "LAX - Los Angeles",
    "SFO - San Francisco",
    "ORD - Chicago",
    "SEA - Seattle",
    "ATL - Atlanta",
    "DFW - Dallas/Fort Worth",
    "DEN - Denver",
    "MIA - Miami",
    "BOS - Boston",
    "PHX - Phoenix",
    "LAS - Las Vegas",
    "IAD - Washington D.C.",
    "EWR - Newark",
    "CLT - Charlotte",
    "MSP - Minneapolis",
    "DTW - Detroit",
    "PHL - Philadelphia",
    "SAN - San Diego",
    "TPA - Tampa"
  ];

  return (
    <datalist id="airport-list">
      {airports.map((airport, index) => (
        <option key={index} value={airport} />
      ))}
    </datalist>
  );
};

export default SearchForm;
