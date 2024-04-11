function valorarPuntuaciones(){
    let puntuacion = parseInt(prompt("Ingrese su puntuación: "));
    let resultado = "";

    if (puntuacion >= 90){
        resultado = `Excelente - ${puntuacion}`;
    }
    else if (puntuacion >= 70 && puntuacion <= 89){
        resultado = `Buen trabajo - ${puntuacion}`;
    }
    else if (puntuacion < 70){
        resultado = `Necesitas mejorar - ${puntuacion}`;
    }
    else{
        resultado = `Ingrese un caracter valido`;
    }
    document.getElementById("lista").innerHTML = resultado;
}