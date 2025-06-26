import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';

function App() {
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

export default App;