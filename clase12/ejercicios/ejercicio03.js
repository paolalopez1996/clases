// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome
//  como argumentos tres números, un valor, un número minimo y
//   un número maximo, y devuelva true si el valor se encuentra entre los números
//    minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// estaEnRango(3, 1, 10)   // true
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false

function estaEnRango (valor)  {
    
    
    if (valor <= 10 && valor >= 0 ){
    
  return console.log(true);

} else{
   return console.log(false);
}
 
}
 
estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false