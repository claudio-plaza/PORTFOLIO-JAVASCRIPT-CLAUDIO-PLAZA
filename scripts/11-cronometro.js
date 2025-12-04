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

  let soundPlayed = false;

  function playBeep() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = 880;
      o.connect(g);
      g.connect(ctx.destination);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
      o.start(ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
      o.stop(ctx.currentTime + 0.3);
    } catch (e) {
      // fallback simple
      const audio = new Audio();
      // generate a short beep using data URI? leave silent if not supported
      // not adding a binary asset to keep repo simple
      console.warn('Beep no soportado:', e);
    }
  }

  if (btnIniciar) {
    btnIniciar.addEventListener('click', () => {
      if (!intervalo) {
        intervalo = setInterval(() => {
          segundos++;
          actualizarCronometro();
          if (segundos === 5 && !soundPlayed) {
            playBeep();
            soundPlayed = true;
          }
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
      soundPlayed = false;
    });
  }
})();
