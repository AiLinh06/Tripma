// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import googlePlayIcon from '../../assets/google-play.png';
import appStoreIcon from '../../assets/app-store.png';

const Footer = () => {
  return (
    
    <footer className="footer">
      <h2 className="footer-logo">Tripma</h2>
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-columns">
            <div className="footer-column about-column">
              <h4>About</h4>
              <ul>
                <li><a href="#">About Tripma</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Forum</a></li>
              </ul>
            </div>
            <div className="footer-column partner-column">
              <h4>Partner with us</h4>
              <ul>
                <li><a href="#">Partnership programs</a></li>
                <li><a href="#">Affiliate program</a></li>
                <li><a href="#">Connectivity partners</a></li>
                <li><a href="#">Promotion and events</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Loyalty program</a></li>
                
              </ul>
            </div>
            <div className="footer-column support-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Trust and Safety</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
            <div className="footer-column app-column">
              <h4>Get the app</h4>
               <ul>
                <li><a href="#">Tripma for Android</a></li>
                <li><a href="#">Tripma for iOS</a></li>
                <li><a href="#">Mobile Site</a></li>
                
              </ul>
              <div className="app-icons" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
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
