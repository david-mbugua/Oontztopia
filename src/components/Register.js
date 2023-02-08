import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  }); 

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const database = firebase.database();
    database.ref('users').push({
      name: formData.name,
      email: formData.email,
      number: formData.number
    });
  };

  return (
    <div className='registerDiv'>
      <div className='registerHead'>
        <h1>Register</h1>
        <p>For Oontztopia news & updates</p>
      </div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="number">Phone Number:</label>
      <input
        type="number"
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
      />

      <button type="submit">Join</button>
    </form>
    </div>
  );
};

export default Register;
