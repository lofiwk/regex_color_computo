// Agregar un event listener al formulario para manejar el evento 'submit'
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Detener el formulario para que no salga corriendo hacia el servidor y recargue la página.
    event.preventDefault();

    // Obtener referencias a los elementos del formulario y al elemento de resultado
    const nombre = document.getElementById('nombre');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const resultado = document.querySelector('.resultado');

    // Expresiones regulares para validar los campos del formulario
    const nombreRegex = /^[a-zA-Z\s]+$/;
    const asuntoRegex = /^[a-zA-Z\s]+$/;
    const mensajeRegex = /^[a-zA-Z\s]+$/;

    // Variable para rastrear si el formulario es válido
    let isFormValid = true;

    // Validación del campo de nombre
    if (!nombreRegex.test(nombre.value)) {
        document.querySelector('.errorNombre').textContent = 'El nombre es requerido';
        isFormValid = false;
    } else {
        document.querySelector('.errorNombre').textContent = '';
    }

    // Validación del campo de asunto
    if (!asuntoRegex.test(asunto.value)) {
        document.querySelector('.errorAsunto').textContent = 'El asunto es requerido';
        isFormValid = false;
    } else {
        document.querySelector('.errorAsunto').textContent = '';
    }

    // Validación del campo de mensaje
    if (!mensajeRegex.test(mensaje.value)) {
        document.querySelector('.errorMensaje').textContent = 'El mensaje es requerido';
        isFormValid = false;
    } else {
        document.querySelector('.errorMensaje').textContent = '';
    }

    // Si el formulario es válido, mostrar un mensaje de éxito
    if (isFormValid) {
        resultado.textContent = 'Mensaje enviado con éxito!!!';
    }
});
