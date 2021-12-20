// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!
function gritar(nombre){
const pregunta = prompt('ingrese una palabra')
    
alert(`¡${pregunta}!`);
console.log('si ejecuta la función');
} 
gritar()