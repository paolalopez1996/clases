//funciones
//la palabra reservada: function
// nombre de funcion: nameFunction
// parametros: (valores)


/*
function nameFunction(parametro1, parametro2){
instrucciones de codigo a ejecutar
}
*/

// function saludar(){
//     alert('Hola, que gusto verte de nuevo');
//     console.log('si ejecuta la función')
// };
// saludar();

// function saludarA(nombre){
//     alert(`hola ${nombre}, me agrada verte`);
//     console.log('funcion con parametros');
// }
// saludar();
// saludarA('Cecilia');

/*
funciones anonimas
las funcioens anonimas pueden guardarse en variables
const nameFunction = function((parametro1, parametro2){
instrucciones de codigo a ejecutar

nameFunction(argumento1 argumento2);
*/

const sumaDeDos = function(){
    console.log(2+2)
}
const suma = function(numero1, numero2){
    console.log(numero1 + numero2);
}
sumaDeDos();
suma(5,2);


// funciones como valores
// son aquellas que pasan como argumento 

const obtenerNombre = function(){
const nombre = prompt('Cuál es tu nombre?');
  
return nombre;
}


  
// funciones flecha
// parentesis para parametros
// flecha que sustituye la palabra function
// llaves que agrupan las lineas a ejecutar
// const nameFunction = ()  => {}

const resta = (num1, num2) => {
console.log(num1 - num2);
}
resta(10,6);

// SCOPE: alcance que van a tener mis indicaciones

const nombreGiann = 'Gianne'
const obtenerApellido = () => {
const apellido = prompt('cual es tu apellido?')

    return apellido;
}
// console.log(nompreGiann);
// console.log(apellido);  muestra error porque no puede encontrar apellido

console.log(obtenerApellido());
obtenerApellido(2);

/*parametros:
deben mostrarse adecuadamente siguiendo las mismas variables  y funciones
los parametros que no se usan en la ejecution seran ignorados
parametros por default son aquellos que si no reciben valor agarran el definido
*/

const multiplicar = (num1, num2 = 2) =>{
    console.log(num1 * num2);
}
multiplicar(5,4); // enviando todos los argumentos
multiplicar(7) // haciendo uso de lparametro por default


const despedida = (name = "deconocido") => {
    console.log(`hasta luego ${name}`);
}
despedida('Talia');
despedida();