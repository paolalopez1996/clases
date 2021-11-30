// Días a segundos

// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.
const dia = prompt('Ingrese la cantidad de días para saber su conversión en segundos')
const segundos = 86400;
const resultado = dia * segundos;

alert(`${dia} dias tienen ${resultado} segundos`);