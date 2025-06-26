import React, { useState } from 'react';
import './SignupPopup.css';

const SignupPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [dealsChecked, setDealsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsChecked) {
      // Handle signup logic here
      console.log('Signup with:', { email, password, dealsChecked });
      onClose();
    } else {
      alert('Please agree to the terms and conditions');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Sign up for Tripma</h2>
        <p>Tripma is totally free to use. Sign up using your email address or phone number below to get started.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="checkbox-wrapper">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
            />
            <span>I agree to the terms and conditions</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={dealsChecked}
              onChange={(e) => setDealsChecked(e.target.checked)}
            />
            <span>Send me the latest deal alerts</span>
          </label>
          </div>
          <button type="submit" className="create-account-btn">Create account</button>
        </form>
        <div className="or-divider">or</div>
        <button className="google-btn">Continue with Google</button>
        <button className="apple-btn">Continue with Apple</button>
        <button className="facebook-btn">Continue with Facebook</button>
      </div>
    </div>
  );
};

export default SignupPopup;