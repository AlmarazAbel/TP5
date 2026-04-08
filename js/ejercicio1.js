/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
 en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
 la interfaz del usuario debe tener además un input para ingresar un número y
  un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario 
  adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que 
  ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
let numeroMagico = null;

        const btnComenzar = document.getElementById("comenzar");
        const btnEnviar = document.getElementById("enviar");
        const input = document.getElementById("numeroInput");
        const mensaje = document.getElementById("mensaje");

        // Generar número aleatorio
        btnComenzar.addEventListener("click", () => {
            numeroMagico = Math.floor(Math.random() * 100) + 1;// genera numeros aleatorios enteros de 1 a 100
       mensaje.textContent = "Juego iniciado! Adivina un número del 1 al 100";
            console.log("Número mágico:", numeroMagico); // para pruebas
        });

        // Verificar número
        btnEnviar.addEventListener("click", () => {
            if (numeroMagico === null) {
              mensaje.textContent ="Primero debes comenzar el juego"
                return;
            }

            const numeroUsuario = Number(input.value);

            if (!numeroUsuario) {
                mensaje.textContent ="Ingresa un número válido"
                return;
            }

            if (numeroUsuario === numeroMagico) {
                mensaje.textContent ="FELICIDADES ADIVINASTE EL NUMERO!!!"
            } else if (numeroUsuario < numeroMagico) {
                mensaje.textContent =" El número es mayor "
            } else {
                mensaje.textContent ="El número es menor "
            }

            input.value = "";
        });