let tiempo = 0;
    let intervalo = null;

    const input = document.getElementById("tiempoInput");
    const display = document.getElementById("display");

    const btnIniciar = document.getElementById("iniciar");
    const btnPausar = document.getElementById("pausar");
    const btnReset = document.getElementById("reset");

    // Iniciar
    btnIniciar.addEventListener("click", () => {
      if (intervalo !== null) return; // si hay un intervalo corriendo no hagas nada

      if (tiempo === 0) {
        tiempo = parseInt(input.value);
      }

      intervalo = setInterval(() => {
        if (tiempo > 0) {
          tiempo--;
          display.textContent = tiempo;
        } else {
          clearInterval(intervalo);//frena el setIntervalo
          intervalo = null;
        }
      }, 1000);// ejecuta el codigo cada un segundo
    });

    // Pausar
    btnPausar.addEventListener("click", () => {
      clearInterval(intervalo);
      intervalo = null;
    });

    // Reset
    btnReset.addEventListener("click", () => {
      clearInterval(intervalo);
      intervalo = null;
      tiempo = 0;
      display.textContent = 0;
      input.value = "";
    });