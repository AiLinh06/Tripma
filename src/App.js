import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import styles from './App.module.css';
import CookieConsent from './components/CookieConsent/CookieConsent';
import FlightPage from './pages/FlightPage';
function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightPage />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;