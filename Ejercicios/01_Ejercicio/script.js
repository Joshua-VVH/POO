function identificarMayorEdad(){
    let resultado = "";
    //Identificar si es mayor o menor de edad
    let num1 = prompt("Ingrese el primer número: ");
    let num2 = prompt("Ingrese el segundo número: ");

    if(num1 > num2){
       resultado = `El primer número es mayor <h2>${num1}</h2>`;
    }
    else if(num1 < num2){
        resultado = `El segundo número es mayor <h2>${num2}</h2>`;
    }
    else if (num1 == num2){
        resultado = `Ambos números son iguales <h2>${num1} y ${num2}</h2>`;
    }
    else{
        resultado = `Ingrese un caracter valido`;
    }
    document.getElementById('lista').innerHTML = resultado;
 }