// MÓDULO 9: LISTA DE TAREAS
const ListaTareas = {
    ejecutar: function() {
        mostrarResultado('output9', 'Usa el campo de entrada para agregar tus tareas.');
    }
};

function ejercicio9() { ListaTareas.ejecutar(); }

function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const lista = document.getElementById('listaTareas');
    const texto = input.value.trim();

    if (texto === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    // Crear elemento de lista
    const li = document.createElement('li');
    li.style.cssText = 'background: white; margin: 5px 0; padding: 10px; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 0 5px #ccc;';
    
    const span = document.createElement('span');
    span.textContent = texto;

    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.style.cssText = 'background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; padding: 5px 10px;';
    btn.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(btn);
    lista.appendChild(li);
    input.value = '';
}
