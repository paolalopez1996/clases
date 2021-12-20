/*
aceptaDeposito(monto)

Crear una función aceptaDeposito que tome
 como argumento un número monto y devuelva true si el
  monto es divisible por 10 o false si no lo es

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true
*/

const aceptaDeposito = (monto) => {
    if(monto % 10 === 0){
        return console.log(true);
    }else console.log(false);
};
aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true