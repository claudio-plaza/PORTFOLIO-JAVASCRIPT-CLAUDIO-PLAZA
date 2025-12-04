// MÓDULO 5: LISTA DE COMPRAS
const ListaCompras = {
    ejecutar: function() {
        // Lista dinámica usando push y splice
        const compras = [
            { item: 'Leche', precio: 1200, cantidad: 2 },
            { item: 'Pan', precio: 800, cantidad: 1 },
            { item: 'Huevos', precio: 2500, cantidad: 1 },
            { item: 'Café', precio: 3200, cantidad: 1 }
        ];

        function calcularTotal() {
            return compras.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
        }

        function mostrar() {
            let texto = 'LISTA DE COMPRAS\n\n';
            compras.forEach((p, i) => {
                texto += `${i + 1}. ${p.item} - $${p.precio} x${p.cantidad} = $${p.precio * p.cantidad}\n`;
            });
            texto += `\n--- TOTAL: $${calcularTotal()}`;
            mostrarResultado('output5', texto);
        }

        // Menú interactivo simple
        while (true) {
            mostrar();
            const opcion = prompt('Lista de compras:\n1 = Agregar producto\n2 = Eliminar producto (por número)\n3 = Modificar cantidad\n0 = Salir');
            if (opcion === null || opcion === '0') break;

            if (opcion === '1') {
                const nombre = prompt('Nombre del producto:');
                if (!nombre) continue;
                const precio = parseFloat(prompt('Precio (sin $):'));
                const cantidad = parseInt(prompt('Cantidad:')) || 1;
                if (isNaN(precio)) {
                    alert('Precio inválido');
                    continue;
                }
                compras.push({ item: nombre, precio: precio, cantidad: cantidad });
            } else if (opcion === '2') {
                const idx = parseInt(prompt('Número del producto a eliminar:'));
                if (isNaN(idx) || idx < 1 || idx > compras.length) { alert('Índice inválido'); continue; }
                compras.splice(idx - 1, 1);
            } else if (opcion === '3') {
                const idx = parseInt(prompt('Número del producto a modificar la cantidad:'));
                if (isNaN(idx) || idx < 1 || idx > compras.length) { alert('Índice inválido'); continue; }
                const nuevaCant = parseInt(prompt('Nueva cantidad:'));
                if (isNaN(nuevaCant) || nuevaCant < 0) { alert('Cantidad inválida'); continue; }
                compras[idx - 1].cantidad = nuevaCant;
            } else {
                alert('Opción no reconocida');
            }
        }
    }
};

function ejercicio5() { ListaCompras.ejecutar(); }
