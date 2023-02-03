import './App.css';
import React from 'react';
import logo from '../src/logo.png';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Contacts } from './components/Contacts';
import { About } from './About';
import Register from './components/Register';
import Events from './components/Events';


const App = () => {
  return (
    <>
    <nav style={{background: 'transparent' }}>
              <ul>
                  <li><img src={logo} alt="Logo" className='logo' /></li>
                  <li><Link to ="/"> Home </Link></li>
                  <li><Link to ="/events">Events & Tickets</Link></li>
                  <li><Link to ="/about">About Us</Link></li>
                  <li><Link to ="/contacts">Contacts</Link></li>
                  <li><Link to ="/register">Register</Link></li>
              </ul>
          </nav> 

      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = 'events' element = {<Events />} />
        <Route path = 'about' element = {<About />} />
        <Route path='contacts' element = {<Contacts />} />
        <Route path='register' element = {<Register />} />
      </Routes>

      </>
  
  );
}


export default App;