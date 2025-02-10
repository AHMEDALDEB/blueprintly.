// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp1-7dQd9seVePUajc4X2fj-NqrLrQfW0",
  authDomain: "blueprintly-nexus.firebaseapp.com",
  projectId: "blueprintly-nexus",
  storageBucket: "blueprintly-nexus.firebasestorage.app",
  messagingSenderId: "1036351905657",
  appId: "1:1036351905657:web:ad084e4d02934cd61b99a8",
  measurementId: "G-CTN4MPKN87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);