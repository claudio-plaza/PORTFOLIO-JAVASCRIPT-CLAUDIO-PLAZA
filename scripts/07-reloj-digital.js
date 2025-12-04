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
            // Cambiar color según la hora del día
            const h = ahora.getHours();
            let color = '#2c3e50';
            if (h >= 6 && h < 12) {
                // mañana
                color = '#27ae60';
            } else if (h >= 12 && h < 18) {
                // tarde
                color = '#f1c40f';
            } else if (h >= 18 && h < 22) {
                // noche temprana
                color = '#e67e22';
            } else {
                // noche
                color = '#34495e';
            }
            display.style.color = color;
        };

        actualizar();
        this.intervalo = setInterval(actualizar, 1000);
        mostrarResultado('output7', 'Reloj en ejecución... Haz clic nuevamente para detener.');
    }
};

function ejercicio7() { RelojDigital.ejecutar(); }
