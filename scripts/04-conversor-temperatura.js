// MÓDULO 4: CONVERSIÓN DE TEMPERATURAS
const ConversionTemperaturas = {
    ejecutar: function() {
        // Menú simplificado: opción 3 permite convertir entre Kelvin y Celsius (bidireccional)
        let opcion = prompt("¿Qué conversión?\n1 = Celsius a Fahrenheit\n2 = Fahrenheit a Celsius\n3 = Kelvin <-> Celsius (elige la dirección despues)");
        if (opcion === null) return;

        if (opcion !== "1" && opcion !== "2" && opcion !== "3") {
            mostrarResultado('output4', 'ERROR: Opción no válida');
            return;
        }

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
            // pedir dirección: 1 = Kelvin a Celsius, 2 = Celsius a Kelvin
            const dir = prompt("Elige dirección:\n1 = Kelvin a Celsius\n2 = Celsius a Kelvin");
            if (dir === null) return;
            if (dir === "1") {
                // Kelvin a Celsius
                resultado = temp - 273.15;
                mostrarResultado('output4', temp + "K = " + resultado.toFixed(2) + "°C");
            } else if (dir === "2") {
                // Celsius a Kelvin
                resultado = temp + 273.15;
                mostrarResultado('output4', temp + "°C = " + resultado.toFixed(2) + "K");
            } else {
                mostrarResultado('output4', 'ERROR: Dirección no válida');
            }
        }
    }
};

function ejercicio4() { ConversionTemperaturas.ejecutar(); }
