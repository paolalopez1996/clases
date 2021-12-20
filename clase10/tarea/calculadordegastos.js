let cantidad = 3;
let saldoactual = 0;
let saldoinicial = prompt (' Ingrese su saldo actual');
let luz = prompt ('¿A cuánto equivale la factura de la luz?');
cantidad--;
alert ('Quedan por ingresar ' + `${cantidad} servicios`); 
saldoactual = parseFloat (saldoinicial) - parseFloat (luz);
alert ('El saldo actual es: $' + saldoactual); 
let gas = prompt ('¿A cuánto equivale la factura del gas?');
cantidad--;
saldoactual = parseFloat (saldoactual) - parseFloat (gas);
alert ('Quedan por ingresar ' + `${cantidad} servicios`);
alert ('El saldo actual es: $' + saldoactual); 
let internet = prompt ('¿A cuánto equivale la factura de internet?');
cantidad--;
saldoactual = parseFloat (saldoactual) - parseFloat (internet);
alert ('El saldo actual es: $' + saldoactual); 
alert ('Quedan por ingresar ' + `${cantidad} servicios`); 




