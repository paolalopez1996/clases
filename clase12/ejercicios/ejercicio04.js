// puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva 
// true si puede avanzar o false si no. 
// Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// puedeAvanzar('verde')     // true
// puedeAvanzar('amarillo')  // false
// puedeAvanzar('rojo')      // false
// puedeAvanzar('lila')      // 'Error: color de semáforo inválido'


 function puedeAvanzar(colorActual){
  
    if(colorActual === "verde" || colorActual === "amarillo" ){
        
        return console.log(true)

    } else if (colorActual === "rojo"){
       
        return console.log(false)
    }else{
        return console.log('Color de semaforo inválido')
    }

          } 


  puedeAvanzar('verde')     // true
 puedeAvanzar('amarillo')  // false
 puedeAvanzar('rojo')      // false
  puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

