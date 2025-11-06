// Tu API Key de OMDb
const API_KEY = "726235af";

const movieTitleInput = document.getElementById("movieTitle");
const searchBtn = document.getElementById("searchBtn");
const title = document.getElementById("title");
const poster = document.getElementById("poster");
const year = document.getElementById("year");
const plot = document.getElementById("plot");

// Función que busca la película en la API
async function getMovie() {
  const titleQuery = movieTitleInput.value.trim(); // Obtenemos el texto del input
  if (!titleQuery) return alert("Escribe un título de película");

  try {
    // Hacemos la petición a OMDb con fetch()
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(titleQuery)}&apikey=${API_KEY}`);
    const data = await res.json(); // Convertimos la respuesta en JSON

    if (data.Response === "True") {
      // Mostramos los datos en el HTML
      title.textContent = data.Title;
      poster.src = data.Poster !== "N/A" ? data.Poster : "";
      year.textContent = `Año: ${data.Year}`;
      plot.textContent = data.Plot;
    } else {
      // Si no encuentra película
      title.textContent = "Película no encontrada 😕";
      poster.src = "";
      year.textContent = "";
      plot.textContent = "";
    }

  } catch (err) {
    console.error("Error:", err);
    title.textContent = "Error al buscar película 😕";
    poster.src = "";
    year.textContent = "";
    plot.textContent = "";
  }
}

// Evento al hacer clic en el botón
searchBtn.addEventListener("click", getMovie);
