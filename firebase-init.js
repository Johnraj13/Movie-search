// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVAv2iwvzg0YY9lput9NAasaME7PDJF1M",
    authDomain: "movie-search-website-4a81b.firebaseapp.com",
    projectId: "movie-search-website-4a81b",
    storageBucket: "movie-search-website-4a81b.appspot.com",
    messagingSenderId: "314600519340",
    appId: "1:314600519340:web:eafcf51a15e1c42b799109"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();