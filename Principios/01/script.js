
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = parseInt(prompt("Ingrese su edad: "));

function mostrarDatos(nombre, apellido, edad){
    console.log(`Su nombre completo es: ${nombre} ${apellido}`);
    console.log(`Su edad es: ${edad}`);
}

mostrarDatos(nombre, apellido, edad);