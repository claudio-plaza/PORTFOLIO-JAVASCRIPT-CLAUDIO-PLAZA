function actualizarReloj() {
  const ahora = new Date();

  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  const reloj = document.getElementById("reloj");
  reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}

// Ejecuta la función cada 1 segundo
setInterval(actualizarReloj, 1000);

// Llama a la función inmediatamente al cargar la página
actualizarReloj();
