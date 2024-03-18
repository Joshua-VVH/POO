// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'Ahora' y 'Fecha_Nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
let Ahora = 2024;
let Fecha_Nac = 2004;
let edad = Ahora - Fecha_Nac;
alert("Mi edad es: " + 19);
// Tu código aquí
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'y'.
function asignarValores() {
let x = 15;
let y = x;
alert("El valor de Y es: " + y);

// Tu código aquí
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1', 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
let num1 = 5;
let num2 = 10;
let num3 = 15;
let suma = num1 + num2 + num3;
let resta = num1 - num3;
let multi = num2 * num3;
let divi = num1 / 120;

alert("la suma es " + suma + "\n la resta es " + resta + "\n la multi es " + multi + "\n la division es " + divi );

// Tu código aquí
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_Casa'.
// Luego, muestra la longitud del mensaje y el primer carácter en el mensaje.
function manipularCadenas() {
let direccion = "La Granja";
let n_Casa = "8460";
let mensaje = "La direcion es : " + direccion + " " + n_Casa;
let longitud = mensaje.length;
alert("Mensaje: " + mensaje +"\nLongitud: " + longitud +"\nPrimer Caracter: " + mensaje[3]);
// Tu código aquí
}