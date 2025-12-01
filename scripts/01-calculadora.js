// MÓDULO 1: CALCULADORA
const Calculadora = {
    ejecutar: function() {
        let num1 = prompt("Ingresa el primer número:");
        if (num1 === null) return;
        num1 = parseFloat(num1);

        if (isNaN(num1)) {
            mostrarResultado('output1', 'ERROR: Debes ingresar un número válido');
            return;
        }

        let num2 = prompt("Ingresa el segundo número:");
        if (num2 === null) return;
        num2 = parseFloat(num2);

        if (isNaN(num2)) {
            mostrarResultado('output1', 'ERROR: Debes ingresar un número válido');
            return;
        }

        let operacion = prompt("¿Qué operación? (+, -, *, /)");
        if (operacion === null) return;

        let resultado;
        if (operacion === "+") {
            resultado = num1 + num2;
        } else if (operacion === "-") {
            resultado = num1 - num2;
        } else if (operacion === "*") {
            resultado = num1 * num2;
        } else if (operacion === "/") {
            if (num2 === 0) {
                mostrarResultado('output1', 'ERROR: No se puede dividir por cero');
                return;
            }
            resultado = num1 / num2;
        } else {
            mostrarResultado('output1', 'ERROR: Operación no válida');
            return;
        }

        let texto = num1 + " " + operacion + " " + num2 + " = " + resultado;
        mostrarResultado('output1', texto);
    }
};

function ejercicio1() { Calculadora.ejecutar(); }
