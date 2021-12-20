// esHoraValida(hora)
// Crear una función esHoraValida
//  que tome como argumento un string hora con el
//   formato HH:mm y determine si es una hora válida del día o no

// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true
function esHoraValida(hora){
 if ( hora >= '00:00' ||  hora <= '23:59' )
 return console.log(true)

 if ( hora > '24:61' || hora < '00:99' ){

 console.log(false);
};
}


esHoraValida('12:23') // true
 esHoraValida('12:65') // false
 esHoraValida('28:05') // false
 esHoraValida('00:00') // true