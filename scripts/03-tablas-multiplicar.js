// MÓDULO 3: TABLA DE MULTIPLICAR
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

        // Generar resultados en un array y mostrarlos con for...of
        const resultados = [];
        for (let i = 1; i <= limite; i++) {
            resultados.push(`${numero} x ${i} = ${numero * i}`);
        }

        let texto = `TABLA DEL ${numero}\n\n`;
        for (const linea of resultados) {
            texto += linea + "\n";
        }

        mostrarResultado('output3', texto);
    }
};

function ejercicio3() { TablaMultiplicar.ejecutar(); }
