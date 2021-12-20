// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

const esPar = (numero) => {
    const usuario = parseInt (prompt('ingrese el numero'));
    if(numero % 2 !== 0){
      return alert(`${usuario} es impar es false`);
    }
    if(numero % 2 == 0){
    return alert( `${usuario} es par + true`);
}
  }
 console.log(numero)

  
  // Si(condicion se cumple){Realiza lo de aqui dentro}
  // if(){}
  /*
  console.log(esPar(10));
  console.log(esPar(7));
  
  console.log(esParDatoUsuario());
  */
