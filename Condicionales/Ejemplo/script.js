 function identificarMayorEdad(){
    //Identificar si es mayor o menor de edad
    let edad = prompt("Por favoringrese su edad: ");

    if(edad >= 18){
        alert(`Es mayor de edad, tiene: ${edad} años`);
    }
    else{
        alert(`Es menor  de edad, tiene: ${edad} años`);
    }
 }