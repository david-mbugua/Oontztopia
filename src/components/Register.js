import React, { useState } from "react";
//import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyCYRq3_JmxMsN_g8JdQzlxtpZOUi8x92fw",
//   authDomain: "oontztopia-c57e6.firebaseapp.com",
//   projectId: "oontztopia-c57e6",
//   storageBucket: "oontztopia-c57e6.appspot.com",
//   messagingSenderId: "1073014387929",
//   appId: "1:1073014387929:web:6dc0b72b954accb3ea7ac8",
//   measurementId: "G-R6N8VFBNWQ"
// };

// firebase.initializeApp(firebaseConfig);


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // firebase
    //   .database()
    //   .ref("users")
    //   .push({
    //     name: formData.name,
    //     email: formData.email,
    //     number: formData.number
    //   })
    //   .then(() => {
    //     console.log("Data saved successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error saving data: ", error);
    //   });
  };
  

  return (
    <div className="registerDiv">
      <div className="registerHead">
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
