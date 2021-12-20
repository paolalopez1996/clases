// germinar(plantines)
// Crear una función germinar que tome 
// como argumento un string de plantines con flores
//  y plantines (🌱). El array debe comenzar con una flor.
//   La función debe devolver un string con los plantines convertidos en flores. 
//   El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:



const germinar = (plantines) => {

   let result =  '';

    for (let i= 1; i < plantines.length; i++) {

        if (plantines[i]  === '🌱'  &&  plantines[i-1] === '🌷') {

          return  result = plantines[i-1];

           
        }  else if  (plantines[i]  === '🌱'  && plantines[i-1] === '🌻') {

          return  result = plantines[i-1];
       
       
        }else if  (plantines[i]  === '🌱'  && plantines[i-1] === '🌸') {

          return  result = plantines[i-1];
          
      
        }

       
        
    }
    return result;
}

console.log(germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')) // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
console.log(germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')) // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
console.log(germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱')) // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'