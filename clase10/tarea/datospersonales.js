/*Datos personales

Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, 
y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.*/

const nombre = prompt('ingresa tu nombre');
const apellido = prompt('ingresa tu apellido');
const edad = prompt('¿Cuál es tu edd?');
const nacionalidad = prompt('Nacionalidad');
const documento = prompt('ingresa tu número de DNI');


alert(`nuevo usuario agregado: ${nombre} ${apellido}, ${edad}, ${nacionalidad},${documento}`);