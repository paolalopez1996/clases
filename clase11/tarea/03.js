// esImpar(numero)
// Crear una función esImpar que tome como argumento un número
//  y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 
// el resto (o módulo) de esa operación no es 0

function esImparDatoUsuario(value) {
    const usuario = parseInt (prompt('ingrese el numero'));
    if (parseInt (value % 2 !== 0)){
     return alert  (parseInt(`${value} is true`));
    }
    else { parseInt(value % 2 == 0)
       
     return  alert  (parseInt(`${value} is false`));
}
 

}

esImparDatoUsuario()