document.getElementById("buscar").addEventListener("click", () => {
  const user = document.getElementById("usuario").value.trim();
  if (!user) return alert("Ingrese un usuario");

  document.getElementById("resultado").innerHTML = "🔎 Buscando...";

  fetch(`https://api.github.com/users/${user}`)
    .then((res) => {
      if (!res.ok) throw new Error("Usuario no encontrado");
      return res.json();
    })
    .then((data) => {
      document.getElementById("resultado").innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar">
        <h2>${data.login}</h2>
        <p>👥 Seguidores: ${data.followers}</p>
        <p>📦 Repos públicos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">Ver perfil</a>
        <p>Ubicacion ${data.location}</p>
        <p>email ${data.email}</p>
      `;
    })
    .catch((error) => {
      document.getElementById("resultado").innerHTML = `❌ ${error.message}`;
    })
    .finally(() => console.log("🔍 Búsqueda finalizada"));
});
