// recortar(cantidadLetras, palabras)
// Crear una función recortar que tome 
// como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con
//  las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando,
//   y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.




const recortar = (cantidadLetras, palabras) => {


let textoModificado = palabras.slice( - cantidadLetras.length)
console.log(textoModificado)


}





console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
console.log(recortar(1, ['algoritmo', 'bug', 'compilador'])) // ['a', 'b', 'c']