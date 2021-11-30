// Lista de reproducción

// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones,
//  y al finalizar se muestre un mensaje que diga, 
// p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

const playlist = prompt('ingresa nombre de tu playlist');
const cancion1 = prompt('escribe el título de una cancion para tu playlist');
const cancion2 = prompt('escribe el título de una cancion para tu playlist');
const cancion3 = prompt('escribe el título de una cancion para tu playlist');
alert(`se ha creado una playlist: "${playlist}" con las canciones: ${cancion1}, ${cancion2}, y ${cancion3}`);