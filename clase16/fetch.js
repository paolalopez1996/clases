//fetch 

/*
metodo propio de JAVASCRIPT para enviar un pedido y obtener informacion de un servior
en otras palabras conectarnos con otras aplicaciones, bases de datos o servidores.
sintaxis:
let variable =  fetch(url, [options])

metodos: GET, POST, PUT, DELETE

Let pokemon = fetch('https://pokeapi.co/pokemons');

then(callback): se ejecuta cundo es satisfactoria la respuesta
catch(callback): se ejecuta cuando existe un error


/*
let pokemon = fetch('https://pokeapi.co/pokemons');

then(callback): Se ejecuta cuando es satisfactoria la respuesta
catch(callback): Se ejecuta cuando existe un error

*/

let pikachu = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

pikachu
 .then((response) => {
  return response.json();
 })
  .then((data) => {
  const h1 = document.querySelector('h1');
   return h1.innerText = data.name;
 })
 .catch((error) => {console.log(error)})

