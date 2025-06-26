import React from 'react';
import styles from './SearchBar.module.css';
import departureIcon from './assets/departure.png';
import arrivalIcon from './assets/arrival.png';
import calendarIcon from './assets/calendar with dates.png';
import personIcon from './assets/person solid.png';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}>
          <img src={departureIcon} alt="Departure" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input type="text" placeholder="From where?" />
        </div>
        <div style={{ borderLeft: '2px solid #e0e0e0', height: 40, margin: '0 12px' }} />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
          <img src={arrivalIcon} alt="Arrival" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input type="text" placeholder="Where to?" />
        </div>
        <div style={{ borderLeft: '2px solid #e0e0e0', height: 40, margin: '0 12px' }} />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
          <img src={calendarIcon} alt="Calendar" style={{ width: 38, height: 38, marginRight: 10 }} />
          <input type="text" placeholder="Depart - Return" />
        </div>
        <div style={{ borderLeft: '2px solid #e0e0e0', height: 40, margin: '0 12px' }} />
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