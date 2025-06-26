import React from 'react';
import styles from './homeLayout.module.css';
import Header from '../components/Header/Header';
import Navigation from '../components/NavBar/Navigation';
import SearchBar from '../components/SearchBar/SearchBar';

function HomeLayout() {
  return (
    
    <div className={styles.app}>
      <Header />
      <Navigation />
      <div className={styles.textContainer}>
        <div className={styles.centeredText}>It's more than <br />just a trip</div>
      </div>
      <SearchBar />
    </div>
  );
}

export default HomeLayout;