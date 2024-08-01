function encontrarMayorMenor(array){
    
    let mayor = array[0];
    let menor = array[0];
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i]
        }
        else if(array[i] < menor){
            menor = array[i]
        }
    }
    alert("El numero mayor es: " + mayor + "\nel numero menor es: " + menor);
    return array; 
};

let resultado = encontrarMayorMenor([3,5,10]);