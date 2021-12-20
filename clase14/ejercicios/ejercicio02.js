// obtenerMenor(numeros)
// Crear una función obtenerMenor que
//  tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:



const arrayNumbers = [5,7,99,34,54,2,12];
const obtenerNumeroMenor = (numeros) => {
const arregloOrdenado = arrayNumbers.sort((a,b) =>{
    return a - b;
} );
console.log(arregloOrdenado.shift());

}
obtenerNumeroMenor(arrayNumbers);