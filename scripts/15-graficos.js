// Ejercicio 15: Gráficas Interactivas con Chart.js

const Graficos = {
    datos: {
        etiquetas: [],
        valores: []
    },
    chart: null,
    tipoGraficoActual: 'bar',

    inicializar: function() {
        // Inicializar eventos
        document.getElementById('formVentas').addEventListener('submit', (e) => {
            e.preventDefault();
            this.agregarDato();
        });

        document.getElementById('tipoGrafico').addEventListener('change', (e) => {
            this.tipoGraficoActual = e.target.value;
            this.actualizarGrafico();
        });

        // Cargar datos guardados
        this.cargarDatos();
        this.actualizarGrafico();
        this.actualizarEstadisticas();
    },

    agregarDato: function() {
        const producto = document.getElementById('producto').value;
        const cantidad = parseFloat(document.getElementById('cantidad').value);

        if (!producto || isNaN(cantidad) || cantidad <= 0) {
            alert('Por favor ingresa datos válidos');
            return;
        }

        this.datos.etiquetas.push(producto);
        this.datos.valores.push(cantidad);

        document.getElementById('producto').value = '';
        document.getElementById('cantidad').value = '';

        this.guardarDatos();
        this.actualizarGrafico();
        this.actualizarEstadisticas();
    },

    actualizarGrafico: function() {
        const ctx = document.getElementById('miGrafico').getContext('2d');

        if (this.chart) {
            this.chart.destroy();
        }

        const colores = this.generarColores(this.datos.valores.length);

        this.chart = new Chart(ctx, {
            type: this.tipoGraficoActual,
            data: {
                labels: this.datos.etiquetas,
                datasets: [{
                    label: 'Datos',
                    data: this.datos.valores,
                    backgroundColor: colores,
                    borderColor: colores.map(c => c.replace('0.7', '1')),
                    borderWidth: 2,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: this.tipoGraficoActual !== 'pie'
                    }
                }
            }
        });
    },

    actualizarEstadisticas: function() {
        const valores = this.datos.valores;

        if (valores.length === 0) {
            document.getElementById('totalValor').textContent = '0';
            document.getElementById('promedioValor').textContent = '0';
            document.getElementById('maximoValor').textContent = '0';
            document.getElementById('minimoValor').textContent = '0';
            return;
        }

        const total = valores.reduce((a, b) => a + b, 0);
        const promedio = (total / valores.length).toFixed(2);
        const maximo = Math.max(...valores);
        const minimo = Math.min(...valores);

        document.getElementById('totalValor').textContent = total;
        document.getElementById('promedioValor').textContent = promedio;
        document.getElementById('maximoValor').textContent = maximo;
        document.getElementById('minimoValor').textContent = minimo;
    },

    generarColores: function(cantidad) {
        const colores = [];
        for (let i = 0; i < cantidad; i++) {
            const hue = (i * 360 / cantidad) % 360;
            colores.push(`hsla(${hue}, 70%, 60%, 0.7)`);
        }
        return colores;
    },

    guardarDatos: function() {
        localStorage.setItem('graficos_datos', JSON.stringify(this.datos));
    },

    cargarDatos: function() {
        const datos = localStorage.getItem('graficos_datos');
        if (datos) {
            this.datos = JSON.parse(datos);
        }
    },

    limpiar: function() {
        this.datos.etiquetas = [];
        this.datos.valores = [];
        this.guardarDatos();
        this.actualizarGrafico();
        this.actualizarEstadisticas();
    }
};

function limpiarGraficas() {
    if (confirm('¿Estás seguro de que deseas limpiar todos los datos?')) {
        Graficos.limpiar();
    }
}

// Inicializar cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    Graficos.inicializar();
});
