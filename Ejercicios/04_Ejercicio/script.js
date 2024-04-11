function identificarNumero(){
    let resultado = "";
    let numero = parseInt(prompt("Por favor, ingrese un número: "));

    if (numero > 0){
        resultado = `El número es positivo`;
    }
    else if (numero < 0){
        resultado = `El número es negativo`;
    }
    else if (numero == 0){
        resultado = `El número es 0`
    }
    else{
        resultado = `Ingrese un elemento valido`
    }
    document.getElementById("lista").innerHTML = resultado;
}