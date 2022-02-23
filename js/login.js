document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value = '';

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    passwordField.value = '';

    if(userEmail == 'sontan@baap.com' && userPassword == 'secret bank') {
        window.location.href = 'banking.html';
    }
});