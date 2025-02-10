// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// إعدادات Firebase الخاصة بمشروعك
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXX-XXXXXXXXXXX",
    authDomain: "blueprintly-nexus.firebaseapp.com",
    projectId: "blueprintly-nexus",
    storageBucket: "blueprintly-nexus.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
