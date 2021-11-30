// Perímetro de un rectángulo

// Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo,
//  calcular su perímetro y mostrarlo en un mensaje.

const altura = prompt('ingrese la altura del rectángulo');
const ancho = prompt('ingrese el ancho del rectángulo');
const resultado = (altura * 2) + (ancho * 2);

alert(`El perímetro de tu rectángulo es: ${resultado}`)