// Área de un triangulo

// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo,
//  calcular su área y mostrarlo en un mensaje.

const base = prompt('ingrese el valor de la base del triágulo')
const altura = prompt('ingrese el valor de la altura del triángulo')
const resultado = (base * altura) / 2;

alert(`El área de su triángulo con una altura de ${altura} y una base de ${base} es: ${resultado}`)