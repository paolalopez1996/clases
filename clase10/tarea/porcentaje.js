// Porcentaje

// Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. 
// Devolver un mensaje muestre el porcentaje de dicho número.

const numero = prompt('ingrese un número')
const porcentaje = prompt('¿Qué porcentaje deseas obtener?')

const resultado = (porcentaje * numero) / 100;

alert(`El ${porcentaje}% de ${numero} es: ${resultado}`)