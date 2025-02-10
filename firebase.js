// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO1mZTDXuIqXw9BlAeiPB0cLnLSPoOzxo",
  authDomain: "blueprintly-nexus-fbf93.firebaseapp.com",
  projectId: "blueprintly-nexus-fbf93",
  storageBucket: "blueprintly-nexus-fbf93.firebasestorage.app",
  messagingSenderId: "540936735843",
  appId: "1:540936735843:web:6d4f0b2748eb1ff307bc56",
  measurementId: "G-WWS984QB0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);