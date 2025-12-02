// MÓDULO 13: BUSCADOR DE USUARIOS GITHUB
const BuscadorGitHub = {
    buscar: function() {
        const user = document.getElementById("usuario").value.trim();
        if (!user) {
            alert("Ingrese un usuario");
            return;
        }

        document.getElementById("resultado").innerHTML = "🔎 Buscando...";

        fetch(`https://api.github.com/users/${user}`)
            .then((res) => {
                if (!res.ok) throw new Error("Usuario no encontrado");
                return res.json();
            })
            .then((data) => {
                document.getElementById("resultado").innerHTML = `
                    <img src="${data.avatar_url}" alt="Avatar" style="width: 100px; border-radius: 50%; margin: 10px 0;">
                    <h2>${data.login}</h2>
                    <p>👥 Seguidores: ${data.followers}</p>
                    <p>📦 Repos públicos: ${data.public_repos}</p>
                    <p>📍 Ubicación: ${data.location || 'No especificada'}</p>
                    <p>📧 Email: ${data.email || 'No especificado'}</p>
                    <a href="${data.html_url}" target="_blank" style="color: #3498db; text-decoration: none;">Ver perfil en GitHub →</a>
                `;
            })
            .catch((error) => {
                document.getElementById("resultado").innerHTML = `❌ ${error.message}`;
            });
    }
};

function ejercicio13() {
    mostrarResultado('output13', 'Buscador de usuarios GitHub listo. Ingresa un usuario.');
}

document.addEventListener('DOMContentLoaded', function() {
    const btnBuscar = document.getElementById('buscar-github');
    if (btnBuscar) btnBuscar.addEventListener('click', () => BuscadorGitHub.buscar());
});
