// repetirLetras(palabra, cantidad)
// Crear una función repetirLetras que tome como
//  argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida
//   cantidad de veces.



function repetirLetras(palabra, cantidad) {
  let result = palabra.repeat(cantidad)
  
  // let result2 = palabra.charAt(1).repeat(cantidad);
   //let result3 = palabra.charAt(2).repeat(cantidad);
  // let result4 = palabra.charAt().repeat(cantidad);
  // let result5 = palabra.charAt().repeat(cantidad);

  console.log(result)
  };


repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'