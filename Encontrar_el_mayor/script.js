function encontrarMayorMenor(array){
    let mayor = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i]
        }
    }
    return mayor;    

    let menor = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return menor; 
};

let resultado = encontrarMayorMenor([3,5,7,2,200,33,100,3]);
alert(resultado); 