/*
sumarImparesHasta(numero)
Crear una función sumarImparesHasta que tome 
como argumento un número numero y que devuelva
 la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
*/
const sumarImparesHasta = (numero) => {

    let limite = 0;
    let sumaTotal = 0; // aqui vamos a ir guardando los impares 

while (limite <= numero){
    
    
//saber si el numero es impar
   if(limite % 2 != 0){
    sumaTotal += limite;
// si es impar sumar al total, 
  
}
//si es par ignorarlo 
        
//incrementar el limite en cada vuelta
limite++
    }

    return console.log(sumaTotal);
}
sumarImparesHasta(5) // 9 
 sumarImparesHasta(13) // 49
 sumarImparesHasta(47) // 576