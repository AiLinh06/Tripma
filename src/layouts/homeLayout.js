import React, { useEffect } from 'react';
import Navigation from '../components/NavBar/Navigation';
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';
import styles from './homeLayout.module.css';
import DealsSection from '../components/DealsSection/DealsSection';
import StaysSection from '../components/StaysSection/StaysSection';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

function HomeLayout({ disableScroll }) {
  useEffect(() => {
    document.body.style.overflow = disableScroll ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [disableScroll]);

  return (
    <div className={styles.app}>
      <Header />
      <Navigation />
      <div className={styles.textContainer}>
        <div className={styles.centeredText}>
          It's more than <br /> just a trip
        </div>
      </div>
      <SearchBar />
      <DealsSection />
      <StaysSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomeLayout;
