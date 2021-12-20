// convertirHorasEnSegundos(horas)
// Crear una función convertirHorasEnSegundos que tome como 
// argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas


function convertirHorasEnSegundos(horas){
    const hora= prompt('ingresa la hora que desea saber en segundos')
    const segundo = 3600 * hora
    return alert(`${hora} hora(s) son ${segundo}` )
   
  
}
convertirHorasEnSegundos()