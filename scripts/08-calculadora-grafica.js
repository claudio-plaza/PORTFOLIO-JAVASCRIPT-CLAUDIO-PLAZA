// MÓDULO 8: CALCULADORA GRÁFICA
const CalculadoraGrafica = {
    mostrada: false,
    ejecutar: function() {
        const calc = document.getElementById('calculadora');
        const btn = document.getElementById('btnCalc');
        
        this.mostrada = !this.mostrada;
        calc.style.display = this.mostrada ? 'block' : 'none';
        btn.textContent = this.mostrada ? 'Cerrar Calculadora' : 'Abrir Calculadora';
    }
};

function ejercicio8() { CalculadoraGrafica.ejecutar(); }

function agregarDigito(digito) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += digito;
}

function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = 'Error';
    }
}

function limpiarCalculadora() {
    document.getElementById('pantalla').value = '';
}
