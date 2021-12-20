// metodos de los arreglos 
// lenght == longitud 
// la longitud de un arreglo  se inicia a partir de 1 (!= indice)
const frutas = ['pera',  'manzana', 'platano' , 'uva', 'sandia',];
console.log(frutas.length); // 5

// a traves de lenght puedes obtener el ultimo elemento
const textoSimple = 'Hola estudiantes'
console.log(frutas.length);


// a traves de lenght podes obtener el ultimo elemento 

console.log(frutas[frutas.length -1]);

//push == agregar uno o mas elementos al FINAL del arreglo

let persona ={
    edad: 24,
    profesion: 'carpintero',
    tools: [
        'martillo',
        'cable',
        'flecha',
    ]
}
const pisosEdificio = [1,2,3,4];
pisosEdificio.push()

// unshift == agregar uno o mas elementos al inicio del array 
pisosEdificio.unshift('sotano', 'planta baja');
console.log('pisos edificio unshift', pisosEdificio)


// shift == eliminar el primer elemento  del arreglo
const primerFruta = frutas.shift();
console.log('arreglo modificado', frutas) ;

// pop== eliminar el ultimo elemento del arreglo
const ultimaFruta = frutas.pop();
console.log('ultima fruta', ultimaFruta);
console.log('arreglo modificado x2', frutas)


// sort == ordena los elementos del arreglo y los retorna

const abecedario = ['A', 'B', 'a', 'F','e', 'i']
const abecedarioOrdenado = abecedario.sort();
console.log(abecedario);

const numeros = [1,2,3,4,5,10,85,90,20,25,100]
const numerosOrdenados = numeros.sort();
console.log(numerosOrdenados)


const numbers = [4, 2, 5, 1, 3, 11, 22];
const numbersOrdenados = numbers.sort((a, b) => {
  return a - b;
});
console.log('ordenamiento con funcion', numbersOrdenados);


// reverse == permite revertir el orden del arreglo
const numerosNuevos = [1,2,3,4,5];
numerosNuevos.reverse();
console.log('REVERSE', numerosNuevos)

// concat == podemos unir arreglos de diferentes maneras 
// join == unir los valores del arreglo en un string 

const verduras = ['calabaza', 'papa', 'apio'];
const precios = [12,34,75,86];

const unionVerduras = verduras.join('-');
console.log(unionVerduras, 'JOIN');


let pares = [0,2,4,6,8];
let impares = [1,3,5,7];
let todosLosNumeros = pares.concat(impares);
console.log('CONCAT', todosLosNumeros);

//indexOf == nos retorna el primer indice donde se encuentre el elemento
const canciones = ['music', 'dance','baile', 'dance', 'ritmo', 'dance'];
console.log(canciones.indexOf('baile'));
console.log(canciones.indexOf('dance'));
console.log(canciones.indexOf('noExiste'));

//totring une los elementos del array conviertiendolso en uno solo
console.log(canciones.toString());
console.log('---------')
//recorrer arreglos 


//RECORRER ARREGLOS
//*ciclo for:


const nombres = ['cecilia', 'daniela','daniela z', 'gianne', 'talia'];
console.log(`hola ${nombres[0]}`)
console.log(`hola ${nombres[1]}`)
console.log(`hola ${nombres[2]}`)

for(let i = 0; i < nombres.length; i++){
    console.log(`hola ${nombres[i]} ciclo`)
    
}

//forEach == permite recorrer un arreglo por cada uno de los elementos

/*
palabra reservada forEach
parentesis que esperan una funcion como parametro
esta funcion tambien usa otro parametro que es el elemto del arreglo
usa como parametro el elemento del arreglo 

arreglo.forEach (elementoDelArreglo) => {tareas a ejecutar})

*/
const calles = ['norte', 'sur', 'este', 'oeste'];

calles.forEach((calle) => {
console.log(`la calle ${calle}  esta en el mapa`)


});


// Map == Crear un nuevo arreglo con el resultado de lo que indiquemos en el ciclo 
const apellidos = ['salazar', 'guzman', 'lopez', 'juarez'];
const apellidosMayusculas = apellidos.map((apellido) => {
  return apellido.toUpperCase();
})
console.log(apellidosMayusculas);

const numerosBase = [1, 2, 3, 4, 5, 6];
const numerosCuadrado = numerosBase.map((numero)=>{
  return numero * numero
});

console.log(numerosCuadrado);


// filter == crea un nuevo arreglo atraves de un filtrado

const costos = [23, 1, 2 ,5, 6 , 98,67];
const costosFiltrados = costos.filter((costo) =>  {

    return  (costo > 15);
})
console.log(costosFiltrados);
const salazar = apellidos.filter((apellido)  => {
    return (apellido === 'salazar')
})
console.log(salazar)


// reduce == reduce un arreglo para obtener un solo elemento
// su funcion interna requeire de 2 parametros
//acumulador / elemento


const totalCostos = costos.reduce((total, costo) => {
    return total + costo
})
console.log('total de costos', totalCostos);



const arrayNumbers = [5,7,99,34,54,2,12];
const obtenerNumeroMenor = (numeros) => {
const arregloOrdenado = arrayNumbers.sort((a,b) =>{
    return a - b;
} );
console.log(arregloOrdenado.shift());

}
obtenerNumeroMenor(arrayNumbers);