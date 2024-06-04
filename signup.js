document.addEventListener('DOMContentLoaded', function () {
    const firebaseConfig = {
        apiKey: "AIzaSyDVAv2iwvzg0YY9lput9NAasaME7PDJF1M",
        authDomain: "movie-search-website-4a81b.firebaseapp.com",
        projectId: "movie-search-website-4a81b",
        storageBucket: "movie-search-website-4a81b.appspot.com",
        messagingSenderId: "314600519340",
        appId: "1:314600519340:web:eafcf51a15e1c42b799109"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const database = firebase.database();

    document.getElementById('signup-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed up successfully:', user);

                user.updateProfile({
                    displayName: name
                }).then(() => {
                    console.log('User profile updated with name');
                    window.location.href = 'login.html';
                }).catch((error) => {
                    console.error('Error updating user profile:', error);
                });
            })
            .catch((error) => {
                console.error('Error signing up:', error.message);
            });
    });
});
