// separar(perrosYGatos)
// Crear una función separar que 
// tome como argumento un string con emojis de perros y 
// gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

const separar = (stringEmojis) => {
    // '🐶🐱🐶🐱🐶🐱🐶🐱' ---> PgPgPgPg
    const perritos = [];
    const gatitos = [];
  
    for(let i = 0; i < stringEmojis.length; i++) {
      if(stringEmojis[i] === 'P'){
        perritos.push(stringEmojis[i]);
      }else{
        gatitos.push(stringEmojis[i]);
      }
    }
  
    const unionArrays = perritos.concat(gatitos); 
    const resultado = unionArrays.toString();
  
    console.log('RESULTADO', resultado);
    return resultado;
  }
  
  separar('PgPggPP');
  


//     const separarPerrosyGatos=()=>
// {
//     let separar = [];
//     let gatos = [
    
//     ];
//     let perros = [
  
//     ];


//     separar[0] = prompt ('Ingrese 🐶 o 🐱');
//     separar[1] = prompt ('Ingrese 🐶 o 🐱');
//     separar[2] = prompt ('Ingrese 🐶 o 🐱');
//     separar[3] = prompt ('Ingrese 🐶 o 🐱');
//     separar[4] = prompt ('Ingrese 🐶 o 🐱');
//     separar[5] = prompt ('Ingrese 🐶 o 🐱');

  
//     for (i=0; i<separar.length; i++) 
//     { 
//         if (separar[i] === '🐱')
//         { gatos[i] = separar[i] }
       
//    else 
//         {perros[i] = separar[i]};
  
// }
// const gatosfiltrados = gatos.filter ((gato)=>
// {return (gato =! null)});
// alert(gatosfiltrados);
// const perrosfiltrados = perros.filter ((perro)=>
// {return (perro =! null)});
// alert(perrosfiltrados);
// }

// separarPerrosyGatos();
    

