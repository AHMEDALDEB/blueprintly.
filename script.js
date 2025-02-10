function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = "dashboard.html"; // توجيه إلى لوحة التحكم
    })
    .catch((error) => {
        document.getElementById("error-message").innerText = error.message;
    });
}
