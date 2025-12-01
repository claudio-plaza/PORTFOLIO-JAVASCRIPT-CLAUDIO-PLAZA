// ==========================================
// PORTFOLIO JAVASCRIPT - MÓDULOS DE EJERCICIOS
// ==========================================

// Función auxiliar para mostrar resultados
function mostrarResultado(outputId, texto) {
    const output = document.getElementById(outputId);
    output.textContent = texto;
    output.classList.add('visible');
}

// ==========================================
// MÓDULO 1: CALCULADORA
// ==========================================
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

// ==========================================
// MÓDULO 2: ADIVINA EL NÚMERO
// ==========================================
const AdivinaNumero = {
    ejecutar: function() {
        let max = prompt("¿Hasta qué número quieres jugar? (ej: 100)");
        if (max === null) return;
        max = parseInt(max);

        if (isNaN(max) || max < 1) {
            mostrarResultado('output2', 'ERROR: Ingresa un número válido');
            return;
        }

        let numero = Math.floor(Math.random() * max) + 1;
        let intentos = 3;
        let texto = "";

        while (intentos > 0) {
            let intento = prompt("Adivina el número (Intentos: " + intentos + ")");
            if (intento === null) return;
            intento = parseInt(intento);

            if (isNaN(intento)) {
                texto += "Debes ingresar un número\n";
                continue;
            }

            if (intento === numero) {
                texto += "¡GANASTE! El número era " + numero;
                mostrarResultado('output2', texto);
                return;
            }

            if (intento > numero) {
                texto += "Es menor que " + intento + "\n";
            } else {
                texto += "Es mayor que " + intento + "\n";
            }

            intentos--;
        }

        texto += "\nPERDISTE. El número era: " + numero;
        mostrarResultado('output2', texto);
    }
};

// ==========================================
// MÓDULO 3: TABLA DE MULTIPLICAR
// ==========================================
const TablaMultiplicar = {
    ejecutar: function() {
        let numero = prompt("¿Qué tabla de multiplicar quieres?");
        if (numero === null) return;
        numero = parseInt(numero);

        if (isNaN(numero)) {
            mostrarResultado('output3', 'ERROR: Debes ingresar un número');
            return;
        }

        let limite = prompt("¿Hasta qué número? (ej: 10)");
        if (limite === null) return;
        limite = parseInt(limite);

        if (isNaN(limite) || limite < 1) {
            mostrarResultado('output3', 'ERROR: Ingresa un límite válido');
            return;
        }

        let texto = "TABLA DEL " + numero + "\n\n";
        for (let i = 1; i <= limite; i++) {
            texto += numero + " x " + i + " = " + (numero * i) + "\n";
        }

        mostrarResultado('output3', texto);
    }
};

// ==========================================
// MÓDULO 4: CONVERSIÓN DE TEMPERATURAS
// ==========================================
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

// ==========================================
// MÓDULO 5: LISTA DE COMPRAS
// ==========================================
const ListaCompras = {
    ejecutar: function() {
        let compras = [
            "Leche - $1200 x2",
            "Pan - $800 x1",
            "Huevos - $2500 x1",
            "Café - $3200 x1"
        ];

        let total = (1200 * 2) + 800 + 2500 + 3200;

        let texto = "LISTA DE COMPRAS\n\n";
        for (let i = 0; i < compras.length; i++) {
            texto += compras[i] + "\n";
        }
        texto += "\n--- TOTAL: $" + total;

        mostrarResultado('output5', texto);
    }
};

// ==========================================
// MÓDULO 6: AGENDA DE CONTACTOS
// ==========================================
const AgendaContactos = {
    ejecutar: function() {
        let contactos = [
            "1. Ana - 261-1234567 - ana@mail.com",
            "2. Luis - 261-7654321 - luis@mail.com"
        ];

        let texto = "CONTACTOS\n\n";
        for (let i = 0; i < contactos.length; i++) {
            texto += contactos[i] + "\n";
        }

        mostrarResultado('output6', texto);
    }
};

// ==========================================
// FUNCIONES DE CONTROL DESDE INDEX.HTML
// ==========================================
function ejercicio1() { Calculadora.ejecutar(); }
function ejercicio2() { AdivinaNumero.ejecutar(); }
function ejercicio3() { TablaMultiplicar.ejecutar(); }
function ejercicio4() { ConversionTemperaturas.ejecutar(); }
function ejercicio5() { ListaCompras.ejecutar(); }
function ejercicio6() { AgendaContactos.ejecutar(); }

// ==========================================
// MÓDULO 7: RELOJ DIGITAL
// ==========================================
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

// ==========================================
// MÓDULO 8: CALCULADORA GRÁFICA
// ==========================================
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

// ==========================================
// MÓDULO 9: LISTA DE TAREAS
// ==========================================
const ListaTareas = {
    ejecutar: function() {
        // Ya está integrada en el HTML
        mostrarResultado('output9', 'Usa el campo de entrada para agregar tus tareas.');
    }
};

// ==========================================
// MÓDULO 10: FORMULARIO DE REGISTRO
// ==========================================
const FormularioRegistro = {
    ejecutar: function() {
        // Ya está integrada en el HTML
        mostrarResultado('output10', 'Completa el formulario y haz clic en Registrarse.');
    }
};

// ==========================================
// FUNCIONES PARA CALCULADORA GRÁFICA
// ==========================================
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

// ==========================================
// FUNCIONES PARA LISTA DE TAREAS
// ==========================================
function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const lista = document.getElementById('listaTareas');
    const texto = input.value.trim();

    if (texto === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    // Crear elemento de lista
    const li = document.createElement('li');
    li.style.cssText = 'background: white; margin: 5px 0; padding: 10px; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 0 5px #ccc;';
    
    const span = document.createElement('span');
    span.textContent = texto;

    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.style.cssText = 'background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; padding: 5px 10px;';
    btn.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(btn);
    lista.appendChild(li);
    input.value = '';
}

// ==========================================
// FUNCIONES PARA FORMULARIO DE REGISTRO
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!nombre || !email || !password) {
            mensaje.textContent = 'ERROR: Todos los campos son obligatorios.';
            mensaje.style.color = 'red';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            mensaje.textContent = 'ERROR: El correo no es válido.';
            mensaje.style.color = 'red';
            return;
        }

        if (password.length < 6) {
            mensaje.textContent = 'ERROR: La contraseña debe tener al menos 6 caracteres.';
            mensaje.style.color = 'red';
            return;
        }

        mensaje.style.color = 'green';
        mensaje.textContent = 'ÉXITO: Registro completado correctamente.';
        form.reset();
    });
});

// ==========================================
// FUNCIONES DE CONTROL PARA NUEVOS EJERCICIOS
// ==========================================
function ejercicio7() { RelojDigital.ejecutar(); }
function ejercicio8() { CalculadoraGrafica.ejecutar(); }
function ejercicio9() { ListaTareas.ejecutar(); }
function ejercicio10() { FormularioRegistro.ejecutar(); }