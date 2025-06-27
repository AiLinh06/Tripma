// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import googlePlayIcon from '../../assets/google-play.png';
import appStoreIcon from '../../assets/app-store.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-logo">Tripma</h2>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><a href="#">About Tripma</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Partner with us</h4>
              <ul>
                <li><a href="#">Become a partner</a></li>
                <li><a href="#">Affiliate program</a></li>
                <li><a href="#">Advertise</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Safety information</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Get the app</h4>
              <div className="app-icons">
                <img src={appStoreIcon} alt="App Store" />
                <img src={googlePlayIcon} alt="Google Play" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-bottom">
            <p>© 2025 Tripma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
