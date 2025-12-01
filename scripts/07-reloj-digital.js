// MÓDULO 7: RELOJ DIGITAL
const RelojDigital = {
    intervalo: null,
    ejecutar: function() {
        const display = document.getElementById('relojDisplay');
        
        // Detener si ya estaba corriendo
        if (this.intervalo) {
            clearInterval(this.intervalo);
            this.intervalo = null;
            display.style.color = '#2c3e50';
            return;
        }

        // Función para actualizar reloj
        const actualizar = () => {
            const ahora = new Date();
            const horas = String(ahora.getHours()).padStart(2, '0');
            const minutos = String(ahora.getMinutes()).padStart(2, '0');
            const segundos = String(ahora.getSeconds()).padStart(2, '0');
            display.textContent = horas + ':' + minutos + ':' + segundos;
        };

        actualizar();
        this.intervalo = setInterval(actualizar, 1000);
        mostrarResultado('output7', 'Reloj en ejecución... Haz clic nuevamente para detener.');
    }
};

function ejercicio7() { RelojDigital.ejecutar(); }
