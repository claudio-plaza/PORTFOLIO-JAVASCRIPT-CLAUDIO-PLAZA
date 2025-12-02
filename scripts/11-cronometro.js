// MÓDULO 11: CRONÓMETRO EN PANTALLA
const Cronometro = {
    segundos: 0,
    intervalo: null,
    
    iniciar: function() {
        if (!this.intervalo) {
            this.intervalo = setInterval(() => {
                this.segundos++;
                this.actualizar();
            }, 1000);
        }
    },
    
    pausar: function() {
        clearInterval(this.intervalo);
        this.intervalo = null;
    },
    
    reiniciar: function() {
        this.segundos = 0;
        this.actualizar();
        clearInterval(this.intervalo);
        this.intervalo = null;
    },
    
    actualizar: function() {
        const hrs = String(Math.floor(this.segundos / 3600)).padStart(2, "0");
        const mins = String(Math.floor((this.segundos % 3600) / 60)).padStart(2, "0");
        const secs = String(this.segundos % 60).padStart(2, "0");
        
        const display = document.getElementById("cronometroDisplay");
        if (display) {
            display.textContent = `${hrs}:${mins}:${secs}`;
        }
    }
};

function ejercicio11() {
    mostrarResultado('output11', 'Cronómetro listo. Usa los botones para controlar.');
}

document.addEventListener('DOMContentLoaded', function() {
    const btnIniciar = document.getElementById('iniciar');
    const btnPausar = document.getElementById('pausar');
    const btnReiniciar = document.getElementById('reiniciar');
    
    if (btnIniciar) btnIniciar.addEventListener('click', () => Cronometro.iniciar());
    if (btnPausar) btnPausar.addEventListener('click', () => Cronometro.pausar());
    if (btnReiniciar) btnReiniciar.addEventListener('click', () => Cronometro.reiniciar());
});
