// Tiempo de viaje

// Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje 
// cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de 
// antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distancia = prompt('ingrese cuantos kilómetros tiene su ruta')

const pie = 5;
const bici = 10;
const moto = 30;

const resultadoBici = distancia / bici * 60 ;
const resultadoPie = distancia / pie * 60;
const resultadoMoto = distancia / moto * 60;

alert(`el tiempo de su recorrido sería ${resultadoBici}min en bici, ${resultadoPie}min a pie y ${resultadoMoto}min en moto`);
