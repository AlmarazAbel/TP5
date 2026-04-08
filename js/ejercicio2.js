//ejercicio 2

let persona;

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  //metodos
  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";

    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else if (this.anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (this.anioNacimiento <= 1993) {
      generacion = "Generacion Y";
      rasgo = "Frustración";
    } else if (this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else {
      generacion = "Generación Alpha";
      rasgo = "Digitales nativos";
    }

    return `Pertenece a la ${generacion}. Rasgo característico: ${rasgo}`;
  }

  esMayorDeEdad() {
    return this.edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
  }

  mostrarDatos() {
    return `
Nombre: ${this.nombre}
Edad: ${this.edad} años
DNI: ${this.dni}
Sexo: ${this.sexo}
Peso: ${this.peso} kg
Altura: ${this.altura} m
Año de nacimiento: ${this.anioNacimiento}
    `;
  }
}

//crear persona
document.getElementById("formPersona").addEventListener("submit", function (e) {
  //esta escuchando cuuando el formulario se envia.
  // function(e), Es la función que se ejecuta cuando ocurre el evento, e=evento

  e.preventDefault(); //para que el navegador no recarga la pag.

  persona = new Persona(
    document.getElementById("nombre").value,
    parseInt(document.getElementById("edad").value),
    document.getElementById("dni").value,
    document.getElementById("sexo").value,
    parseFloat(document.getElementById("peso").value),
    parseFloat(document.getElementById("altura").value),
    parseInt(document.getElementById("anioNacimiento").value),
  );
  // es lo mismo que persona = new Persona(nombre, edad, dni, sexo, peso, altura, anio);
  console.log(persona);
  alert("Persona creada correctamente");
});

function mostrarGen() {
  if (persona) {
    alert(persona.mostrarGeneracion());
  } else {
    alert("Primero crea una persona");
  }
}

function mayorEdad() {
  if (persona) {
    alert(persona.esMayorDeEdad());
  } else {
    alert("Primero crea una persona");
  }
}

function mostrarInfo() {
  if (persona) {
    alert(persona.mostrarDatos());
  } else {
    alert("Primero crea una persona");
  }
}
