// FUNCIONES AUXILIARES
function mostrarResultado(outputId, texto) {
    const output = document.getElementById(outputId);
    output.textContent = texto;
    output.classList.add('visible');
}
