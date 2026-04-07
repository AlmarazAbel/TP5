//4- Crear una web con un reloj que muestre la siguiente información:

const fechaElemento = document.getElementById("fecha");
const horaElemento = document.getElementById("hora");

function actualizarReloj() {
    const ahora = new Date();

    // 📅 Fecha
    const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let diaSemana = dias[ahora.getDay()];
    let dia = ahora.getDate();
    let mes = meses[ahora.getMonth()];
    let año = ahora.getFullYear();

    fechaElemento.textContent = `${diaSemana} ${dia} de ${mes} del ${año}`;

    // 🕒 Hora
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    let ampm = horas >= 12 ? "PM" : "AM";

    // formato 12 horas
    horas = horas % 12;
    horas = horas === 0 ? 12 : horas;

    // agregar 0 adelante
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    horaElemento.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
}

// actualizar cada segundo (BOM)
setInterval(actualizarReloj, 1000);

// ejecutar una vez al cargar
actualizarReloj();