function identificarTemperatura(){
    //Identificar como esta la temperatura
    let temperatura = prompt("Por favoringrese los grados: ");

    if(temperatura < 0){
        alert(`Hace frío`);
    }
    else if(temperatura > 0) and (temperatura < 25){
        alert(`La temperatura es agradable`);
    }
    else if(temperatura >= 25){
        alert(`Hace calor`)
    }
 }