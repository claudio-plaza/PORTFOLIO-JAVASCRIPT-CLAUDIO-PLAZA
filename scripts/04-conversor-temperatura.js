// MÓDULO 4: CONVERSIÓN DE TEMPERATURAS
const ConversionTemperaturas = {
    ejecutar: function() {
        let opcion = prompt("¿Qué conversión?\n1 = Celsius a Fahrenheit\n2 = Fahrenheit a Celsius\n3 = Celsius a Kelvin\n4 = Kelvin a Celsius");
        if (opcion === null) return;

        let temp = prompt("Ingresa la temperatura:");
        if (temp === null) return;
        temp = parseFloat(temp);

        if (isNaN(temp)) {
            mostrarResultado('output4', 'ERROR: Ingresa un número');
            return;
        }

        let resultado;
        if (opcion === "1") {
            resultado = (temp * 9) / 5 + 32;
            mostrarResultado('output4', temp + "°C = " + resultado.toFixed(2) + "°F");
        } else if (opcion === "2") {
            resultado = ((temp - 32) * 5) / 9;
            mostrarResultado('output4', temp + "°F = " + resultado.toFixed(2) + "°C");
        } else if (opcion === "3") {
            resultado = temp + 273.15;
            mostrarResultado('output4', temp + "°C = " + resultado.toFixed(2) + "K");
        } else if (opcion === "4") {
            resultado = temp - 273.15;
            mostrarResultado('output4', temp + "K = " + resultado.toFixed(2) + "°C");
        } else {
            mostrarResultado('output4', 'ERROR: Opción no válida');
        }
    }
};

function ejercicio4() { ConversionTemperaturas.ejecutar(); }
