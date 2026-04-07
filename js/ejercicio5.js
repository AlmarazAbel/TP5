/*5- Realizar una web con un cronómetro,
 que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.gast */
 
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

// DOM
const tiempo = document.getElementById("tiempo");
const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnReset = document.getElementById("reset");

// Función para actualizar el tiempo
function actualizarTiempo() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    tiempo.textContent =
        (horas < 10 ? "0" + horas : horas) + ":" +//Si horas es menor 10 agrega un 0 adelante
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos);
}

// BOTONES
btnIniciar.addEventListener("click", () => {
    if (!intervalo) {//Si el cronómetro NO está corriendo
        intervalo = setInterval(actualizarTiempo, 1000);
    }
});

btnPausar.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
});

btnReset.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    horas = 0;

    tiempo.textContent = "00:00:00";
});
 