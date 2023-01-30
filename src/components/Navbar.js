import './App.css';
import React from 'react';
import logo from '../src/logo.png';
import {
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";

const NavigationBar = () => {
  return (
      <div style={{ background: 'transparent' }}>
          <nav>
              <ul>
                  <li><img src={logo} alt="Logo" className='logo' /></li>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#events-tickets">Events & Tickets</a></li>
                  <li><a href="#about-us">About Us</a></li>
                  <li><a href="#contacts">Contacts</a></li>
                  <li><a href="#register">Register</a></li>
              </ul>
          </nav>
      </div>

  );
}


export default NavigationBar;