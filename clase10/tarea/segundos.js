// Segundos a horas, minutos y segundos

// Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje 
// con el resultado de la conversión en horas, minutos y segundos que corresponde
//  a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

const time = prompt('cuantos segundos deseas convertir?');

var minutes = Math.floor(time / 60);
var hour = Math.floor(time / 3600);
var seconds =  Math.floor(time);

if(seconds >= 60){
seconds = parseInt(seconds % 60);
}
if(minutes >= 60){
    minutes = parseInt(minutes % 60);
 }
alert(`${time} segundos tiene: ${hour} hora, ${minutes} minutos y ${seconds} segundos`)
