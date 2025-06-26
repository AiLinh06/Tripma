import React, { useState } from 'react';
import styles from './Navigation.module.css';
import SignupPopup from '../../components/SignupPopup/SignupPopup';

const Navigation = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Tripma</div>
      <div className={styles.menu}>
        <a href="#flights">Flights</a>
        <a href="#hotels">Hotels</a>
        <a href="#packages">Packages</a>
        <a href="#signin">Sign in</a>
        <button
          className={styles.signup}
          type="button"
          onClick={() => setIsPopupOpen(true)}
        >
          Sign up
        </button>
      </div>
      {isPopupOpen && <SignupPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default Navigation;