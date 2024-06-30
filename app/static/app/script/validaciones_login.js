document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const formError = document.getElementById('formError');

    usernameError.textContent = '';
    passwordError.textContent = '';
    formError.textContent = '';

    if (username.value.trim() === '') {
        usernameError.textContent = 'El nombre de usuario es obligatorio';
        valid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'La contraseña es obligatoria';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        formError.textContent = 'Por favor, corrija los errores en el formulario';
    }
    document.getElementById('signIn').addEventListener('click', function() {
        
        document.getElementById('loginForm').submit();
    });
});
