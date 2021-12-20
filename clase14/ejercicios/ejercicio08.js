// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como
//  argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
// Ejemplo:


function obtenerChatStatus(usuarias) {
    
        //for (var i= 0; i < usuarias.length; i++) {
          if (usuarias.length === 1) {

           return ((`${usuarias[0]} esta conectada`));

          } 
           if (usuarias.length <= 2){

            return (`${usuarias[0]} y ${usuarias[1]}  estan conectadas`);
        
          } 
           if (usuarias.length >= 3 && usuarias.length < 4){

            return (`${usuarias[0]}, ${usuarias[1]}  y 1 persona(s) más  están conectadas`);
         
        } else{
            return (`muchos usuarios estan conectados`)
        }
        
   

};

console.log(obtenerChatStatus(['Ada']));// 'Ada está conectada'
console.log(obtenerChatStatus(['Ada', 'Grace']));// 'Ada y Grace están conectadas'
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie'])); // 'Ada, Grace y 1 persona(s) más están conectadas'
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie','Marie','Marie','Marie']));