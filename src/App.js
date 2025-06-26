import React from 'react';
import HomePage from './pages/homePage';
import styles from './App.module.css';
import CookieConsent from './components/CookieConsent/CookieConsent';
function App() {
  return (
    <div className={styles.app}>
      <HomePage />
      <CookieConsent />

    </div>
  );
}

export default App;