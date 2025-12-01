// MÓDULO 6: AGENDA DE CONTACTOS
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

function ejercicio6() { AgendaContactos.ejecutar(); }
