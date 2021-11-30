// Duración vuelo

// Crear un programa que pida al usuario ingresar, por separado, 
// 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos.
//  Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const primeraEscala = prompt('Ingrese el primer destino ')
const segundaEscala = prompt('Ingrese el segundo destino')
const terceraEscala = prompt('Ingrese el tercer destino')

const primerVuelo = parseInt(prompt('Ingrese la duración del primer vuelo'));
const segundoVuelo = parseInt(prompt('Ingrese la duracion del segundo vuelo'));
const tercerVuelo = parseInt(prompt('Ingrese la duracion del tercer vuelo'));

const resultado = primerVuelo + segundoVuelo + tercerVuelo;

alert(`Primera escala:${primeraEscala}, duración:${primerVuelo} horas.
segunda escala:${segundaEscala}, duración${segundoVuelo} horas.
tercera escala:${terceraEscala}, duración:${tercerVuelo} horas.
duración total del viaje: ${resultado} horas.

`)
