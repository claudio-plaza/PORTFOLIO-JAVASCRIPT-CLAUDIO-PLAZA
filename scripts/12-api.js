const apiKey = "a27cb8ecf6ce17664b7fa267aabb3310"; // 🔑 Regístrate en openweathermap.org

// Referencias a elementos del DOM (asegurar que el script se cargue después del HTML)
const btnBuscar = document.getElementById("buscar");
const inputCiudad = document.getElementById("ciudad");
const resultadoClima = document.getElementById("resultado-clima");
const output12 = document.getElementById("output12");

btnBuscar && btnBuscar.addEventListener("click", async () => {
  const ciudad = inputCiudad ? inputCiudad.value.trim() : "";
  if (!ciudad) return alert("Por favor ingresa una ciudad");

  // Indicador de búsqueda
  if (resultadoClima) {
    // mostrar contenedor y estado de búsqueda
    resultadoClima.style.display = '';
    const el = document.getElementById('clima-ciudad');
    if (el) el.textContent = 'Buscando...';
  }
  if (output12) {
    output12.classList.remove('visible');
    output12.innerHTML = "";
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&units=metric&lang=es&appid=${apiKey}`
    );
    const data = await res.json();

    if (!data || data.cod != 200) {
      const msg = "❌ Ciudad no encontrada";
      const el = document.getElementById('clima-ciudad');
      if (el) el.textContent = msg;
      if (resultadoClima) resultadoClima.style.display = '';
      if (output12) {
        output12.innerHTML = msg;
        output12.classList.add('visible');
      }
      return;
    }

    // Rellenar elementos existentes en el HTML (evita duplicar bloques)
    if (document.getElementById('clima-ciudad')) {
      document.getElementById('clima-ciudad').textContent = `${data.name}, ${data.sys.country}`;
    }
    if (document.getElementById('clima-temp')) {
      document.getElementById('clima-temp').textContent = `🌡 Temp: ${data.main.temp}°C`;
    }
    if (document.getElementById('clima-viento')) {
      document.getElementById('clima-viento').textContent = `💨 Viento: ${data.wind.speed} km/h`;
    }
    if (document.getElementById('clima-desc')) {
      document.getElementById('clima-desc').textContent = `☁️ Clima: ${data.weather[0].description}`;
    }
    if (document.getElementById('clima-humedad')) {
      document.getElementById('clima-humedad').textContent = `💧 Humedad: ${data.main.humidity}%`;
    }

    // Mostrar contenedor
    if (resultadoClima) resultadoClima.style.display = '';
    if (output12) {
      output12.innerHTML = '';
      output12.classList.remove('visible');
    }
  } catch (error) {
    const errMsg = "⚠️ Error al conectar con la API";
    const el = document.getElementById('clima-ciudad');
    if (el) el.textContent = errMsg;
    if (resultadoClima) resultadoClima.style.display = '';
    if (output12) {
      output12.innerHTML = errMsg;
      output12.classList.add('visible');
    }
  }
});

// Nota: si hay problemas con la API key (401) verifica tu clave en openweathermap.org