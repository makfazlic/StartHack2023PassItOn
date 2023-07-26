import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDjyH7YVVm2cbafPt0aKVHuw096DR33-tA",

  authDomain: "passiton-18b36.firebaseapp.com",

  projectId: "passiton-18b36",

  storageBucket: "passiton-18b36.appspot.com",

  messagingSenderId: "1098358774110",

  appId: "1:1098358774110:web:a0fee3d9d39812eae697cf"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);