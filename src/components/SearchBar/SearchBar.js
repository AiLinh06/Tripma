import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import departureIcon from '../../assets/departure.png';
import arrivalIcon from '../../assets/arrival.png';
import calendarIcon from '../../assets/calendar with dates.png';
import personIcon from '../../assets/person solid.png';
import DropdownList from './DropdownList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const airportList = ["NRT", "PVG", "STL", "ATL", "MSP", "SFO", "JFK", "LAX", "SEA", "ORD"];

const SearchBar = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tripType, setTripType] = useState('one-way');
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const filterAirports = (value) =>
    airportList.filter((a) => a.toLowerCase().includes(value.toLowerCase()));

  const handleDateChange = (date) => {
    if (tripType === 'one-way') {
      setDepartDate(date instanceof Date ? date : null);
      setReturnDate(null);
      setShowDatePicker(false);
    } else {
      if (Array.isArray(date)) {
        const [start, end] = date;
        setDepartDate(start instanceof Date ? start : null);
        setReturnDate(end instanceof Date ? end : null);
        if (start && end) setShowDatePicker(false);
      } else if (!departDate || (departDate && returnDate)) {
        setDepartDate(date instanceof Date ? date : null);
        setReturnDate(null);
      } else {
        if (date > departDate) {
          setReturnDate(date instanceof Date ? date : null);
          setShowDatePicker(false);
        } else {
          setDepartDate(date instanceof Date ? date : null);
          setReturnDate(null);
        }
      }
    }
  };

  const getDateInputValue = () => {
    const formatDate = (date) => {
      if (!date) return '';
      if (date instanceof Date) {
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      }
      if (Array.isArray(date) && date[0] instanceof Date) {
        return date[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      }
      return '';
    };
    if (tripType === 'one-way') {
      return formatDate(departDate);
    } else {
      if (departDate && returnDate) {
        return `${formatDate(departDate)} - ${formatDate(returnDate)}`;
      } else if (departDate && !returnDate) {
        return `${formatDate(departDate)} - `;
      } else {
        return '';
      }
    }
  };

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

        {/* Trip Type & Date Picker */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8, marginRight: 8, position: 'relative' }}>
          <img
            src={calendarIcon}
            alt="Calendar"
            style={{ width: 38, height: 38, marginRight: 10, cursor: 'pointer' }}
            onClick={() => setShowDatePicker(true)}
          />
          <input
            type="text"
            placeholder={tripType === 'one-way' ? 'Depart' : 'Depart - Return'}
            value={getDateInputValue()}
            readOnly
            style={{ width: 170 }}
            onClick={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <div style={{ position: 'absolute', zIndex: 10, top: 50, left: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: 8, padding: 16 }}>
              <div style={{ marginBottom: 8, display: 'flex', gap: 16 }}>
                <label style={{ marginRight: 8 }}>
                  <input
                    type="radio"
                    name="tripType"
                    value="one-way"
                    checked={tripType === 'one-way'}
                    onChange={() => {
                      setTripType('one-way');
                      setReturnDate(null);
                    }}
                  />
                  One-way
                </label>
                <label>
                  <input
                    type="radio"
                    name="tripType"
                    value="round-trip"
                    checked={tripType === 'round-trip'}
                    onChange={() => setTripType('round-trip')}
                  />
                  Round-trip
                </label>
              </div>
              <DatePicker
                selected={departDate}
                onChange={handleDateChange}
                startDate={departDate}
                endDate={tripType === 'round-trip' ? returnDate : null}
                selectsStart={tripType === 'round-trip'}
                selectsEnd={tripType === 'round-trip'}
                minDate={tripType === 'round-trip' && departDate ? departDate : new Date()}
                inline
                monthsShown={2}
                disabledKeyboardNavigation
                selectsRange={tripType === 'round-trip'}
                shouldCloseOnSelect={tripType === 'one-way' ? true : false}
              />
              <button className="datepicker-done-btn" onClick={() => setShowDatePicker(false)}>Done</button>
            </div>
          )}
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
