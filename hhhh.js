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

function signup() {
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Incorrect')
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(fucntion(){

            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                name: name,
                email: email,
                password: password
            }
            database_ref.child('users/' + user.id).set(user_data)

            alert('User Created')
        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message
        })
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    }
    else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    }
    else {
        return true
    }
}

