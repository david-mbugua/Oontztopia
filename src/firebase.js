// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYRq3_JmxMsN_g8JdQzlxtpZOUi8x92fw",
  authDomain: "oontztopia-c57e6.firebaseapp.com",
  projectId: "oontztopia-c57e6",
  storageBucket: "oontztopia-c57e6.appspot.com",
  messagingSenderId: "1073014387929",
  appId: "1:1073014387929:web:6dc0b72b954accb3ea7ac8",
  measurementId: "G-R6N8VFBNWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);