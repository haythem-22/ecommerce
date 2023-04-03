import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <footer>
        <div className="socials">
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
        <p>© 2025 House Of Notes. All rights reserved.</p>
      </footer>

      {showPopup && (
        <div className="popup" style={{ display: 'flex' }}>
          <div className="popup-content">
            <span 
              className="close" 
              onClick={() => setShowPopup(false)}
              style={{ cursor: 'pointer', float: 'right' }}
            >
              ×
            </span>
            <h2>🎉 20% OFF</h2>
            <p>On your first purchase!</p>
            <button 
              className="btn-primary" 
              onClick={() => setShowPopup(false)}
            >
              Apply Discount
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;