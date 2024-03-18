//Ejercicio creacion de variables
//Una variable global de tipo
var global = "Global";
//Variable Local
let Local = "Local"
//Constante
const constante = "constante"

console.log("Variables: Global: " + global + "-Local" + Local + "-constante" + constante)



let num = 4; //numero entero
let decimal = 3.1416; //numero decimal 
let string = "Texto"; //cadena de texto
let bool = true; //booleano
let array = ["Perro", 20, "Gato", 50]; //arreglo
let objeto = {Edad:20, Nombre: "Felipe", Telefono: 912345678, Direccion: "Joshua 2158" }; // objeto
let indefinida; //indefinida
let nula =null; //nulo 

function sumar(){
    return 10 + 5;    //funcion sin parametros
};

console.log("Variables:\nEntero: " + num + "\nDecimal" + decimal + "\nString: " + string + "\nBooleano: " + bool + "\nArray: " + array + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinida: " + indefinida + "\nNula: " + nula + "\nResultado de Funcion: " + sumar());
console.log(sumar)

