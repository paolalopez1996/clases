// Dirección completa

// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, 
// el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, 
// p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".


const calle = prompt('ingrese la calle de su domicilio');
const numero = prompt('ingrese la altura de la calle');
const departamento = prompt('ingrese el departamento');
const codigoPostal = prompt('código postal');
const ciudad = prompt('ingrese ciudad');
const pais = prompt('ingrese el país');

alert(`La direccíon que ha ingresado es: ${calle} ${numero}, ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}.`)