/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfjUiyiGqSks7FqJ-oOHUS9lPtobMGpJY",
  authDomain: "netflix-gpt-59.firebaseapp.com",
  projectId: "netflix-gpt-59",
  storageBucket: "netflix-gpt-59.appspot.com",
  messagingSenderId: "824075235377",
  appId: "1:824075235377:web:35a98735eac28e68666510",
  measurementId: "G-T055NC3FXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();