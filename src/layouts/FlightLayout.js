import React, { useEffect } from 'react';
import Navigation from '../components/NavBar/Navigation';
import SearchBar from '../components/SearchBar/SearchBar';
import FlightSection from '../components/FlightSection/FlightSection';
import DealsSection from '../components/DealsSection/DealsSection';
import StaysSection from '../components/StaysSection/StaysSection';
import Footer from '../components/Footer/Footer';



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
      <SearchBar />
      <FlightSection />
      <DealsSection />
      <StaysSection />
      <Footer />
    </div>
  );
}

export default FlightLayout;