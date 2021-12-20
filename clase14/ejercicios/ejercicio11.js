// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que 
// tome como argumentos un número longitud y un array de 
// strings palabras y que devuelva un array con las palabras que 
// tengan una cantidad de letras mayor a longitud. Ejemplo:




function filtrarPorLongitudMayorA(palabras, long1){
  for (i=0; i<palabras.length; i++){
      if (palabras[i].length > long1){
        long1= arr[i].length;
      }

  }
  return console.log(long1);
}

console.log((filtrarPorLongitudMayorA( 4 ['dia','remolacha','azul','sorpresa','te','verde'])));

/*
const filtrarPorLongitudMayorA = (palabras, longitud = 4) => {
  var result = [];

  
    if (typeof palabras === 'string') {
      result = palabras.map(x => x >= longitud);
      result.push(palabras[i]) 
   
   }
    
        return console.log(result)
      
      };
    
console.log((filtrarPorLongitudMayorA( 4 [ 'dia',
'remolacha',
'azul',
'sorpresa',
'te',
'verde'
])));
*/

 




// ['remolacha', 'sorpresa', 'verde']