// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfM1ZG8cHyZWZDqAMig6CZ70DIaK4FO2k",
  authDomain: "sujeitopizza.firebaseapp.com",
  databaseURL: "https://sujeitopizza-default-rtdb.firebaseio.com",
  projectId: "sujeitopizza",
  storageBucket: "sujeitopizza.appspot.com",
  messagingSenderId: "617241237243",
  appId: "1:617241237243:web:da5c5332555b864616c25e",
  measurementId: "G-BNVPHCM3DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);