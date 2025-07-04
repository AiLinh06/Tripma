import React, { useEffect } from 'react';
import Navigation from '../components/NavBar/Navigation';
import SearchBar from '../components/SearchBar/SearchBar';
import FlightSection from '../components/FlightSection/FlightSection';
import DealsSection from '../components/DealsSection/DealsSection';
import StaysSection from '../components/StaysSection/StaysSection';
import Footer from '../components/Footer/Footer';
import FilterRow from '../components/FilterRows/FilterRows';
import styles from './FlightLayout.module.css';


function FlightLayout({ disableScroll }) {
  useEffect(() => {
    document.body.style.overflow = disableScroll ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [disableScroll]);

  return (
    <div>
      <Navigation />
      <div className={styles.SearchBarWrapper}>
        <SearchBar />
      </div>
      <FilterRow />
      <FlightSection />
      <DealsSection />
      <StaysSection />
      <Footer />
    </div>
  );
}

export default FlightLayout;