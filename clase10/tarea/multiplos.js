// Múltiplos

// Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje
//  si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

const primerValor= parseInt (prompt('ingresa un numero'));
const segundoValor= parseInt (prompt('ingresa un numero'));

 var result = primerValor % segundoValor;
 if(result == 0){
    //x es multiplo de y   
    alert(`${primerValor} es multiplo de ${segundoValor}`); } 
 
var result = (primerValor % segundoValor);
if(result != 0){
    //x no es multiplo de y 
    alert(`${primerValor} no es multiplo de ${segundoValor}`);
 }


