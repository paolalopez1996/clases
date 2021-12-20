/*
puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos
 un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. 
 Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true
*/


function puedeVerPelicula (edad, tieneAutorizacion ) {

    if ( edad >= 15 ){
        
        return console.log(true)

    } else if ( edad < 15 && tieneAutorizacion === true ){
       
    
    return console.log(true)
    
} else{
    return console.log(false)
}
       };
        
       puedeVerPelicula(12, false) // false
       puedeVerPelicula(12, true)  // true
       puedeVerPelicula(16, false) // true
       puedeVerPelicula(18, true)  // true
       
    