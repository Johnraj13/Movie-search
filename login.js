import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const submit = document.getElementById('submit');

        submit.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = loginForm['email'].value;
            const password = loginForm['password'].value;

            // Sign in with email and password
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Logged in successfully
                    console.log('User logged in successfully', userCredential.user);
                    // Redirect to dashboard or another page
                    window.location.href = 'home.html';
                })
                .catch((error) => {
                    // Handle errors
                    console.error('Error logging in', error.message);
                });
        });    