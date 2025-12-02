// MÓDULO 12: BUSCADOR DE CLIMA (API OpenWeatherMap)
const Clima = {
    apiKey: "a27cb8ecf6ce17664b7fa267aabb3310",
    
    buscar: async function() {
        const ciudad = document.getElementById("ciudad").value.trim();
        if (!ciudad) {
            alert("Ingrese una ciudad");
            return;
        }

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${this.apiKey}`
            );
            const data = await res.json();

            if (data.cod !== 200) {
                document.getElementById("resultado").innerHTML = "❌ Ciudad no encontrada";
                return;
            }

            document.getElementById("resultado").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperatura: ${data.main.temp}°C</p>
                <p>💨 Viento: ${data.wind.speed} km/h</p>
                <p>☁️ Clima: ${data.weather[0].description}</p>
                <p>💧 Humedad: ${data.main.humidity}%</p>
            `;
        } catch (error) {
            document.getElementById("resultado").innerHTML = "⚠️ Error al conectar con la API";
        }
    }
};

function ejercicio12() {
    mostrarResultado('output12', 'Buscador de clima listo. Ingresa una ciudad.');
}

document.addEventListener('DOMContentLoaded', function() {
    const btnBuscar = document.getElementById('buscar');
    if (btnBuscar) btnBuscar.addEventListener('click', () => Clima.buscar());
});
