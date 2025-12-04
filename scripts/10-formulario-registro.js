// MÓDULO 10: FORMULARIO DE REGISTRO
const FormularioRegistro = {
    ejecutar: function() {
        mostrarResultado('output10', 'Completa el formulario y haz clic en Registrarse.');
    }
};

function ejercicio10() { FormularioRegistro.ejecutar(); }

const REG_KEY = 'registroUsuario';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const mensaje = document.getElementById('mensaje');
    const output = document.getElementById('output10');

    // Cargar registro si existe
    const raw = localStorage.getItem(REG_KEY);
    if (raw) {
        try {
            const data = JSON.parse(raw);
            if (data && data.nombre) {
                output.innerHTML = `<div style="background:#f0f9ff;padding:10px;border-radius:6px;margin-bottom:10px;">Bienvenido de nuevo, <strong>${escapeHtml(data.nombre)}</strong>! <button onclick="borrarRegistro()" style="margin-left:10px;padding:6px 8px;border-radius:4px;border:none;cursor:pointer;background:#e74c3c;color:white;">Cerrar sesión</button></div>`;
                // opcional: rellenar formulario con datos
                if (document.getElementById('nombre')) document.getElementById('nombre').value = data.nombre || '';
                if (document.getElementById('email')) document.getElementById('email').value = data.email || '';
            }
        } catch (e) {
            // Ignorar si parse falla
        }
    }

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

        // Guardar registro (no guardamos contraseña en localStorage)
        const registro = { nombre: nombre, email: email };
        try {
            localStorage.setItem(REG_KEY, JSON.stringify(registro));
        } catch (e) {
            // localStorage puede fallar en modos privados o quota excedida
            console.warn('No se pudo guardar en localStorage', e);
        }

        mensaje.style.color = 'green';
        mensaje.textContent = 'ÉXITO: Registro completado correctamente.';
        output.innerHTML = `<div style="background:#f0f9ff;padding:10px;border-radius:6px;margin-bottom:10px;">¡Gracias por registrarte, <strong>${escapeHtml(nombre)}</strong>!</div>`;
        form.reset();
    });
});

function borrarRegistro() {
    localStorage.removeItem(REG_KEY);
    const output = document.getElementById('output10');
    if (output) output.innerHTML = '';
    alert('Registro eliminado. Recarga la página si deseas registrar otro usuario.');
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#039;');
}
