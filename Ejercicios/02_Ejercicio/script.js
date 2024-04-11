function identificarTemperatura(){
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));
    let resultado = "";

    if (temperatura < 0){
        resultado = `Hace frío, la  temperatura es de <h2>${temperatura}</h2> grados`;
    }
    else if (temperatura > 0 && temperatura < 25){
        resultado = `La temperatura es agradable, la temperatura es de <h2>${temperatura}</h2> grados`
    }
    else if (temperatura >= 25){
        resultado = `Hace calor, la temperatura es de <h2>${temperatura}</h2> grados`
    }
    else{
        resultado = `Ingrese un valor correcto`
    }
    document.getElementById("lista").innerHTML = resultado;
}