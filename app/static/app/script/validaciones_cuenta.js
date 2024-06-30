const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastname');
const secondLastNameInput = document.getElementById('secondlastname');
const rutInput = document.getElementById('rut');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formulario válido. Enviando datos...');
        
    }
});

function validateForm() {
    let isValid = true;

    if (!validateName(nameInput.value)) {
        isValid = false;
    }

    if (!validateLastName(lastNameInput.value)) {
        isValid = false;
    }

    if (!validateRut(rutInput.value)) {
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        isValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
        isValid = false;
    }

    if (!confirmPassword(passwordInput.value, confirmPasswordInput.value)) {
        isValid = false;
    }

    return isValid;
}

function validateName(name) {
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        showError(nameInput, 'El nombre solo puede contener letras y espacios');
        return false;
    } else {
        showValid(nameInput);
        return true;
    }
}

function validateLastName(lastName) {
    if (!lastName.match(/^[a-zA-Z\s]+$/)) {
        showError(lastNameInput, 'El apellido solo puede contener letras y espacios');
        return false;
    } else {
        showValid(lastNameInput);
        return true;
    }
}

function validateRut(rut) {
    
    if (rut.trim() === '') {
        showError(rutInput, 'Por favor, ingrese un RUT válido');
        return false;
    } else {
        showValid(rutInput);
        return true;
    }
}

function validateEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        showError(emailInput, 'Por favor, ingrese un correo electrónico válido');
        return false;
    } else {
        showValid(emailInput);
        return true;
    }
}

function validatePassword(password) {
    
    if (password.length < 8) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres');
        return false;
    } else {
        showValid(passwordInput);
        return true;
    }
}

function confirmPassword(password, confirmPassword) {
    
    if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'Las contraseñas no coinciden');
        return false;
    } else {
        showValid(confirmPasswordInput);
        return true;
    }
}

function showError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.innerText = message;
    errorDiv.classList.add('error-message');
}

function showValid(input) {
    const errorDiv = input.nextElementSibling;
    errorDiv.innerText = '';
    errorDiv.classList.remove('error-message');
    errorDiv.classList.add('valid-message');
}