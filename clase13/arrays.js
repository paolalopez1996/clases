/*ARRAYS O ARREGLOS: ES UN TIPO DE DATOS COMPUESTO O COMPLEJO, QUE SE
FORMA A TRAVÉS DE CORCHETES Y COMAS
SINTAXIS: [] array vacío
[elemento1, elemento2, elemento3] Array con 3 elementos

asignando el arreclo a _const_ no
puedo modificar o cambiar e ltipo de dato, pero si el contenido
del mismo

cada espacio ocupado en el array es un indice. que empieza desde 0

*/
/*
let playlist = [
    'Smells Like Teen Spirit',
    'Come As You Are',
    'Heart-Shaped Box',
    'Lithium'
  ];
  console.log(playlist[0]);
  console.log(playlist[2]);

  let datos = [
    'Ada',
    42,
    true,
    null,
    function() { console.log('¡hola!') }
  ];
  let nombre = datos[0];
  let edad = datos[1];
  let esProgramadora = datos[2];
  let miVariable = datos[3];
  let saludar = datos[4];
  console.log(nombre);
  console.log(edad);
  console.log('programadora?:', esProgramadora);
  console.log(miVariable);*/

let datos = ['gianne', '24', 'programadora', 'Venezolana']
 
 
 let nombre = [0]
 let edad = [1]
 let profesion = [2]
 let nacionalidad = [3] 
 console.log(datos)


const datosUsuario = [];
const nombreU = prompt('ingresa tu nombre')
const edadU = prompt('ingresa tu edad')
const profesionU = prompt('ingresa tu profesion')
const nacionalidadU  = prompt('ingresa tu nacionalidad')

datosUsuario[0] = nombreU;
datosUsuario[1] = edadU;
datosUsuario[2] = profesionU;
datosUsuario[3] = nacionalidadU;
console.log('datos del usuario', datosUsuario);
  