import React, { useState } from 'react';
import './FilterRow.css';

const FilterRow = () => {
  const [maxPrice, setMaxPrice] = useState('');
  const [shops, setShops] = useState('');
  const [times, setTimes] = useState('');
  const [airlines, setAirlines] = useState('');
  const [seatClass, setSeatClass] = useState('');
  const [more, setMore] = useState('');

  // Example options for each filter (customize as needed)
  const priceOptions = ['Any', '$100', '$200', '$300'];
  const shopOptions = ['All', 'Shop A', 'Shop B', 'Shop C'];
  const timeOptions = ['Any', 'Morning', 'Afternoon', 'Evening'];
  const airlineOptions = ['All', 'Airline 1', 'Airline 2', 'Airline 3'];
  const seatOptions = ['Any', 'Economy', 'Business', 'First'];
  const moreOptions = ['Any', 'Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="filter-row">
      <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
        <option value="">Max price</option>
        {priceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={shops} onChange={(e) => setShops(e.target.value)}>
        <option value="">Shops</option>
        {shopOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={times} onChange={(e) => setTimes(e.target.value)}>
        <option value="">Times</option>
        {timeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={airlines} onChange={(e) => setAirlines(e.target.value)}>
        <option value="">Airlines</option>
        {airlineOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)}>
        <option value="">Seat class</option>
        {seatOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={more} onChange={(e) => setMore(e.target.value)}>
        <option value="">More</option>
        {moreOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterRow;