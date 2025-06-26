import React, { useState, useEffect } from 'react';
import './cookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
        <button className="cookie-close" onClick={handleClose}>×</button>
      <div className="cookie-text">
        <span>By using our site, you agree to eat our cookies.</span>
        
      </div>
      <div className="cookie-actions">
        <button className="accept-btn" onClick={handleAccept}>Accept cookies</button>
        <button className="settings-btn">Go to settings</button>
      </div>
    </div>
  );
};

export default CookieConsent;
