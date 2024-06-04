document.addEventListener('DOMContentLoaded', () => {
    const toSignUp = document.getElementById('toSignUp');
    const toLogin = document.getElementById('toLogin');
    const toLogout = document.getElementById('toLogout');

    if (toSignUp) {
        toSignUp.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'signup.html';
        });
    }

    if (toLogin) {
        toLogin.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'login.html';
        });
    }

    if (toLogout) {
        toLogout.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'login.html';
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            alert('User is registered successfully!');
            window.location.href = 'login.html'; // Redirect to login page
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            alert('Login successful!');
            window.location.href = 'home.html'; // Redirect to home page
        });
    }
});
