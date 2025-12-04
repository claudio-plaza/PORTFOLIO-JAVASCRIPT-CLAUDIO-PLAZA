// MÓDULO 6: AGENDA DE CONTACTOS
const AgendaContactos = {
    ejecutar: function() {
        // Usar array de objetos para permitir eliminar por nombre
        const contactos = [
            { name: 'Ana', phone: '261-1234567', email: 'ana@mail.com' },
            { name: 'Luis', phone: '261-7654321', email: 'luis@mail.com' }
        ];

        function mostrar() {
            let texto = 'CONTACTOS\n\n';
            contactos.forEach((c, i) => {
                texto += `${i + 1}. ${c.name} - ${c.phone} - ${c.email}\n`;
            });
            mostrarResultado('output6', texto);
        }

        while (true) {
            mostrar();
            const opcion = prompt('Agenda:\n1 = Agregar contacto\n2 = Eliminar por nombre\n0 = Salir');
            if (opcion === null || opcion === '0') break;
            if (opcion === '1') {
                const name = prompt('Nombre:'); if (!name) continue;
                const phone = prompt('Teléfono:') || '';
                const email = prompt('Email:') || '';
                contactos.push({ name: name, phone: phone, email: email });
            } else if (opcion === '2') {
                const nombreEliminar = prompt('Ingresa el nombre del contacto a eliminar:');
                if (!nombreEliminar) continue;
                const idx = contactos.findIndex(c => c.name.toLowerCase() === nombreEliminar.toLowerCase());
                if (idx === -1) { alert('Contacto no encontrado'); continue; }
                contactos.splice(idx, 1);
            } else {
                alert('Opción no válida');
            }
        }
    }
};

function ejercicio6() { AgendaContactos.ejecutar(); }
