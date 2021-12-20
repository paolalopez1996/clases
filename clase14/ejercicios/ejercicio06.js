// estanJuntos(personajes)
// Crear una función estanJuntos que tome 
// como argumento un array de strings personajes, y devuelva
//  true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:


function estanJuntos(personajes){

for (let i = 0; i < (personajes.length); i++) 
{

if ( personajes[i] == 'Sam' && (personajes[i+1] == 'Frodo' || personajes[i-1] == 'Frodo' ) )
  {

      return true;
  } 
else if(personajes[i] == 'Frodo' && (personajes[i-1] == 'Sam' || personajes[i+1] == 'Sam' ))
{
  return true;
} else{

  return false;
}

  
  };

};



console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) //true
console.log(estanJuntos(['Aragorn', 'Frodo', 'sam']))//true
console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) //false
console.log(estanJuntos([ 'Frodo', 'Legolas', 'Sam'])) //false