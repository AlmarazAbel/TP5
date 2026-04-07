/* - Crea una web con bootstrap y js, que contenga un botón input donde 
se pueda cargar una tarea y un botón que al ser presionado agregue dicha 
tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado
 con un botón creado para ese fin. 
*/

const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

// Agregar tarea
boton.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto === "") return;

  // Crear elemento li
  const li = document.createElement("li");//“Creame un elemento HTML de tipo <li>”
  li.className =
    "list-group-item d-flex justify-content-between align-items-center ";

  li.textContent = texto;//agregar cotenido

  // Botón eliminar
  const btnEliminar = document.createElement("button");// crea esto <button></button>
  btnEliminar.textContent = "🗑️";// <button>🗑️</button>
  btnEliminar.className = "btn btn-outline-danger btn-sm";// da estilo

  // Evento eliminar
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnEliminar);//Mete el botón dentro del <li>
  lista.appendChild(li);//Agrega el elemento li dentro de la lista (ul) , (agregar un hijo)

  input.value = "";
});
