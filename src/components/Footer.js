import React from 'react';
import './App.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>
        <small>Copywrite © {year} OONTZTOPIA All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;