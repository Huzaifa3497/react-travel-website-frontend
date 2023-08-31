import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright © {new Date().getFullYear()} Travel Company</p>
        <ul className="footer-links">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
