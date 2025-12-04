// MÓDULO 14: NOTAS CON LOCALSTORAGE
const Notas = {
    notas: [],
    
    cargar: function() {
        const raw = JSON.parse(localStorage.getItem("notas")) || [];
        // soportar formato antiguo (strings) y nuevo ({text, date})
        this.notas = raw.map(item => {
            if (typeof item === 'string') return { text: item, date: new Date().toISOString() };
            return item;
        });
        this.mostrar();
    },
    
    guardar: function() {
        const input = document.getElementById("nota");
        const texto = input ? input.value.trim() : '';
        if (texto) {
            const notaObj = { text: texto, date: new Date().toISOString() };
            this.notas.push(notaObj);
            localStorage.setItem("notas", JSON.stringify(this.notas));
            this.mostrar();
            if (input) input.value = "";
        }
    },
    
    borrar: function() {
        if (confirm("¿Deseas eliminar todas las notas?")) {
            localStorage.removeItem("notas");
            this.notas = [];
            this.mostrar();
        }
    },
    
    borrarIndividual: function(index) {
        this.notas.splice(index, 1);
        localStorage.setItem("notas", JSON.stringify(this.notas));
        this.mostrar();
    },
    
    mostrar: function() {
        const listaNotas = document.getElementById("listaNotas");
        if (!listaNotas) return;
        
        listaNotas.innerHTML = "";
        this.notas.forEach((obj, i) => {
            const li = document.createElement("li");
            li.style.cssText = 'background: white; margin: 5px 0; padding: 10px; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 0 5px #ccc;';
            
            const left = document.createElement('div');
            left.style.cssText = 'display:flex;flex-direction:column;gap:6px;';
            const span = document.createElement("span");
            span.textContent = obj.text;
            const date = document.createElement('small');
            date.style.cssText = 'color:#666;';
            date.textContent = new Date(obj.date).toLocaleString();
            left.appendChild(span);
            left.appendChild(date);

            const btn = document.createElement("button");
            btn.textContent = "X";
            btn.title = 'Eliminar nota';
            btn.style.cssText = 'background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; padding: 6px 10px;';
            btn.addEventListener('click', () => {
                if (confirm('¿Eliminar esta nota?')) {
                    this.borrarIndividual(i);
                }
            });
            
            li.appendChild(left);
            li.appendChild(btn);
            listaNotas.appendChild(li);
        });
    }
};

function ejercicio14() {
    mostrarResultado('output14', 'Notas cargadas. Las notas se guardan automáticamente.');
    Notas.cargar();
}

document.addEventListener('DOMContentLoaded', function() {
    const btnGuardar = document.getElementById('guardar-nota');
    const btnBorrar = document.getElementById('borrar-notas');
    
    if (btnGuardar) btnGuardar.addEventListener('click', () => Notas.guardar());
    if (btnBorrar) btnBorrar.addEventListener('click', () => Notas.borrar());
    
    Notas.cargar();
});
