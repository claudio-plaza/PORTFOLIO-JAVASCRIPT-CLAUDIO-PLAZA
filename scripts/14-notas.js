// MÓDULO 14: NOTAS CON LOCALSTORAGE
const Notas = {
    notas: [],
    
    cargar: function() {
        this.notas = JSON.parse(localStorage.getItem("notas")) || [];
        this.mostrar();
    },
    
    guardar: function() {
        const nota = document.getElementById("nota").value.trim();
        if (nota) {
            this.notas.push(nota);
            localStorage.setItem("notas", JSON.stringify(this.notas));
            this.mostrar();
            document.getElementById("nota").value = "";
        }
    },
    
    borrar: function() {
        if (confirm("¿Deseas eliminar todas las notas?")) {
            localStorage.removeItem("notas");
            this.notas = [];
            this.mostrar();
        }
    },
    
    mostrar: function() {
        const listaNotas = document.getElementById("listaNotas");
        if (!listaNotas) return;
        
        listaNotas.innerHTML = "";
        this.notas.forEach((texto, i) => {
            const li = document.createElement("li");
            li.style.cssText = 'background: white; margin: 5px 0; padding: 10px; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 0 5px #ccc;';
            
            const span = document.createElement("span");
            span.textContent = texto;
            
            const btn = document.createElement("button");
            btn.textContent = "X";
            btn.style.cssText = 'background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; padding: 5px 10px; width: 30px;';
            btn.addEventListener('click', () => {
                this.notas.splice(i, 1);
                localStorage.setItem("notas", JSON.stringify(this.notas));
                this.mostrar();
            });
            
            li.appendChild(span);
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
