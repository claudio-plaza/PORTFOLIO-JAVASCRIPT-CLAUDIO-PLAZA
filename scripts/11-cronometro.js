// Cronómetro — usa el id `cronometroDisplay` presente en Index.html
(function(){
  const display = document.getElementById('cronometroDisplay');
  const btnIniciar = document.getElementById('iniciar');
  const btnPausar = document.getElementById('pausar');
  const btnReiniciar = document.getElementById('reiniciar');

  let segundos = 0;
  let intervalo = null;

  function formatTime(s) {
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }

  function actualizarCronometro() {
    if (!display) return;
    display.textContent = formatTime(segundos);
  }

  // mostrar estado inicial
  if (display) display.textContent = formatTime(segundos);

  if (btnIniciar) {
    btnIniciar.addEventListener('click', () => {
      if (!intervalo) {
        intervalo = setInterval(() => {
          segundos++;
          actualizarCronometro();
        }, 1000);
      }
    });
  }

  if (btnPausar) {
    btnPausar.addEventListener('click', () => {
      if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
      }
    });
  }

  if (btnReiniciar) {
    btnReiniciar.addEventListener('click', () => {
      segundos = 0;
      actualizarCronometro();
      if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
      }
    });
  }
})();
