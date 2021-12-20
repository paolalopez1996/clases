// capitalizarPalabras(string)
// Crear una función capitalizarPalabras tome como argumento un 
// string string y devuelva un string donde cada palabra está capitalizada
//  (con la primera letra ma´yuscula). Dejar las demás letras como están.


const  capitalizarPalabras = (palabra) => {


  return console.log(palabra.charAt().toUpperCase() + palabra.slice(1));
  
 

}


capitalizarPalabras('esto es un título') // 'Esto Es Un Título'
capitalizarPalabras('había una vez') // 'Había Una Vez' 