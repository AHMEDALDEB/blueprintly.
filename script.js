import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        window.location.href = "dashboard.html"; // توجيه المستخدم إلى لوحة التحكم
    })
    .catch((error) => {
        alert("خطأ: " + error.message);
    });
}
document.querySelector("button").addEventListener("click", login);
