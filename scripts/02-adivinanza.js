// MÓDULO 2: ADIVINA EL NÚMERO
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

function ejercicio2() { AdivinaNumero.ejecutar(); }
