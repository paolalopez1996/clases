/* objetos: un objeto es un tipo de dato compuesto o complejo,
wue se forma a traves de llaves y comas

su estructura esta formada por una propiedad y su valor.

sintaxis: {} objeto vacío
{
propiedad1: valor1, 
propiedad2: valor2, 
propiedad3: valor3 
}
 objeto con propiedades
*/
/*
const alumna = {
nombre: 'gianne',
edad: '24',
nacionalidad: 'venezolana',
curso: 'introductorio',

}
console.log(alumna.nombre);
console.log(alumna.nacionalidad);*/
const marca = prompt('ingrese la marca del automovil')
const modelo = prompt('ingrese el modelo del automovil')
const año = prompt('ingrese el año del automovil')
const tieneSeguro = prompt('está asegurado?')

const automovil = {
    marca,
    modelo,
    año,
    tieneSeguro,
};


console.log(automovil);
console.log(automovil.año)
