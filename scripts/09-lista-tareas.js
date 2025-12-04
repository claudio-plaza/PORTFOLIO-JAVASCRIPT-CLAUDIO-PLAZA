// MÓDULO 9: LISTA DE TAREAS
const ListaTareas = {
    ejecutar: function() {
        mostrarResultado('output9', 'Usa el campo de entrada para agregar tus tareas.');
    }
};

function ejercicio9() { ListaTareas.ejecutar(); }

const TASKS_KEY = 'tareas_lista';
let tareas = [];

function guardarTareas() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tareas));
}

function cargarTareas() {
    const raw = localStorage.getItem(TASKS_KEY);
    if (raw) {
        try {
            tareas = JSON.parse(raw);
        } catch (e) {
            tareas = [];
        }
    } else {
        tareas = [];
    }
    renderTareas();
}

function renderTareas() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';

    for (const tarea of tareas) {
        const li = document.createElement('li');
        li.style.cssText = 'background: white; margin: 5px 0; padding: 10px; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 0 5px #ccc;';

        const span = document.createElement('span');
        span.textContent = tarea.text;

        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.style.cssText = 'background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; padding: 5px 10px;';
        btn.addEventListener('click', () => eliminarTarea(tarea.id));

        li.appendChild(span);
        li.appendChild(btn);
        lista.appendChild(li);
    }
}

function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const texto = input.value.trim();

    if (texto === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    const nueva = { id: Date.now(), text: texto };
    tareas.push(nueva);
    guardarTareas();
    renderTareas();
    input.value = '';
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareas();
    renderTareas();
}

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', () => {
    cargarTareas();
});
