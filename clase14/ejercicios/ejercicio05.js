// gano(tragamonedas)
// Crear una función gano que tome 
// como argumento un array tragamonedas con 5 símbolos y
//  devuelva true si son iguales y false sino. Si el array 
//  tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

function gano (tragamonedas){
    return tragamonedas.every(  e => tragamonedas[0] >= e  ) ;
  
}
 

console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])); // false
console.log(gano(['💫', '💫', '💫', '💫', '💫']));// true
console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])) // true
console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️','⭐️','⭐️'])) // true
console.log(gano(['⭐️','⭐️', ,'💫', '💫','💫','⭐️','⭐️','⭐️'])) // false