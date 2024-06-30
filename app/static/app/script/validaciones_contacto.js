function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var numero = document.getElementById("numero").value;

    
    if (nombre === "") {
        alert("Por favor, introduce tu nombre.");
        return false;
    }

    
    if (email === "") {
        alert("Por favor, introduce tu dirección de correo electrónico.");
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return false;
        }
    }

    
    if (numero === "") {
        alert("Por favor, introduce tu número de teléfono.");
        return false;
    } else {
        var telefonoRegex = /^\+569\d{8}$/; 
        if (!telefonoRegex.test(numero)) {
            alert("Por favor, introduce un número de teléfono válido (formato +569xxxxxxxx).");
            return false;
        }
    }

    
    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo lo antes posible.");
    return true;
}