import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Tripma</div>
      <div className={styles.menu}>
        <a href="#flights">Flights</a>
        <a href="#hotels">Hotels</a>
        <a href="#packages">Packages</a>
        <a href="#signin">Sign in</a>
        <a href="#signup" className={styles.signup}>Sign up</a>
      </div>
    </div>
  );
};

export default Navigation;