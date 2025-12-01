// MÓDULO 5: LISTA DE COMPRAS
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

function ejercicio5() { ListaCompras.ejecutar(); }
