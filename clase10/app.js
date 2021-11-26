//comentario de  linea
/*
comentario de varias lineas

*/

/*tenemos 3 palabras reservadas para almacenar valores 
VAR casi no se usa
LET: permite guardar un valor y cambiarlo si es necesario 
 CONST: permite guardar un valor y no puede ser modificado
var casi no se usa

los nombres de las variables:
- siempre deben ser descriptivos
-siempre deben inicisr con letra
-siempre se escriben en camelcase: nombreDeMiVariable
*/
var nombre = "ana";
let apellido = "salazar";
const nacionalidad = "mexico";

//operador de asignacion: =

let segundonombre;
segundonombre = "paola";
apellido = "guzman";

/*la consola es una herramienta que nos va
a permitir revisar la informacion mientras se ejecuta el proyecto
console.log(dentro va lo que queremos visualizar)
*/
console.log( "muestra el nombre", nombre);
console.log(apellido);



/*tipos de datos:
-string: textos. se suele usar con comillas simples
-number: numero
-boolean: true or false
-undefined:sin valor definido
-null: nulo
*/
//string
let nombreEstudiante = "Ada Lovelace";
let saludo = "hola querida ";
console.log(saludo + nombreEstudiante)

console.log("el pequeño conejo nos dice adios");
//number
let edad = 31;
let temperatura = 45;
console.log(edad, temperatura);

let edadDeMiHijo =10;
let edadDeMiMama = 51;
console.log(edadDeMiHijo + edadDeMiMama);


//typeof para ver con que tipo de datos trabajamos
console.log(typeof nombre);
console.log(typeof temperatura);


/*OPERADORES ARITMETICOS
SUMAR +
RESTAR -
MULTIPLICAR *
DIVIDIR /
modulo o resto %
*/

let dos = 2;
let cinco = 5;
console.log(dos + dos * cinco);
console.log((dos + dos) * cinco);


//incremento o decremento: ++ / --
let incremento = 0;
incremento++;
console.log(incremento);

//operadores lógicos:

/*operador de comapración simple (entrega un boolan como resultado)
==
*/
let numero1 = 20;
let numero2= 20;
let numero3 = 30;
console.log(numero1 == numero2);

/*operador de comapración estricta (entrega un boolan como resultado)
compara los valores y el tipo de dato
===
*/

console.log('comparacion estricta', numero1 === numero3);

//--------------------------------------------------------------------------------

/*
prompt: nos va a permitir recolectar data de nuestro usuario
sintaxtis: prompt();

dentro de los parentesis va un texto para qeu lo lea el usuario
las respuesta del prompt son solo de tipo string
*/

 const  nombreUsuario = prompt('cual es tu nombre');
  const edadUsuario = prompt('cual es tu edad?');
  const despedida = `Adios ${nombreUsuario}, vuelve pronto`;
  alert(despedida);

  
  console.log( saludo + nombreUsuario);

  console.log
console.error ("este es un error");
console.warn("esta es una advertencia");
console.info("esta es solo informacion");

//-----
/*template strings
${variable}
*/