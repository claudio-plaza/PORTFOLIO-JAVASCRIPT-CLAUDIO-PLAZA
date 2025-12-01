// MÓDULO 10: FORMULARIO DE REGISTRO
const FormularioRegistro = {
    ejecutar: function() {
        mostrarResultado('output10', 'Completa el formulario y haz clic en Registrarse.');
    }
};

function ejercicio10() { FormularioRegistro.ejecutar(); }

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!nombre || !email || !password) {
            mensaje.textContent = 'ERROR: Todos los campos son obligatorios.';
            mensaje.style.color = 'red';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            mensaje.textContent = 'ERROR: El correo no es válido.';
            mensaje.style.color = 'red';
            return;
        }

        if (password.length < 6) {
            mensaje.textContent = 'ERROR: La contraseña debe tener al menos 6 caracteres.';
            mensaje.style.color = 'red';
            return;
        }

        mensaje.style.color = 'green';
        mensaje.textContent = 'ÉXITO: Registro completado correctamente.';
        form.reset();
    });
});
