import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import departureIcon from '../../assets/departure.png';
import arrivalIcon from '../../assets/arrival.png';
import calendarIcon from '../../assets/calendar with dates.png';
import personIcon from '../../assets/person solid.png';
import DropdownList from './DropdownList';

const airportList = ["NRT", "PVG", "STL", "ATL", "MSP", "SFO", "JFK", "LAX", "SEA", "ORD"];

const SearchBar = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  const filterAirports = (value) =>
    airportList.filter((a) => a.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        {/* From */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 16, position: 'relative' }}>
          <img src={departureIcon} alt="Departure" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input
            type="text"
            placeholder="From where?"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            onFocus={() => setShowFromList(true)}
            onBlur={() => setTimeout(() => setShowFromList(false), 100)}
          />
          <DropdownList
            airports={filterAirports(fromValue)}
            visible={showFromList}
            onSelect={(val) => setFromValue(val)}
          />
        </div>

        <div style={{ borderLeft: '2px solid #e0e0e0', height: 40, margin: '0 12px' }} />

        {/* To */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8, position: 'relative' }}>
          <img src={arrivalIcon} alt="Arrival" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input
            type="text"
            placeholder="Where to?"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            onFocus={() => setShowToList(true)}
            onBlur={() => setTimeout(() => setShowToList(false), 100)}
          />
          <DropdownList
            airports={filterAirports(toValue)}
            visible={showToList}
            onSelect={(val) => setToValue(val)}
          />
        </div>

        <div style={{ borderLeft: '2px solid #e0e0e0', height: 40, margin: '0 12px' }} />

        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
          <img src={calendarIcon} alt="Calendar" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input type="text" placeholder="Depart - Return" />
        </div>

        <div style={{ borderLeft: '2px solid #e0e0e0', height: 40, margin: '0 12px' }} />

        {/* Person */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
          <img src={personIcon} alt="Person" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input type="text" placeholder="1 adult" />
        </div>

        <button className={styles.searchBtn}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
