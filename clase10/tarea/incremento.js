// Incremento

// Crear un programa que pida ingresar una número de partida y
//  una cantidad a ir incrementando y mostrar cinco mensajes seguidos que 
//  muestren el número del mensaje y el total incrementado hasta el momento
//  (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.)

var numero1=parseInt(prompt('ingrese numero de partida'));
    var numero2=parseInt(prompt('cantidad a incrementar'));
     
    if (numero1) {
        var resultado=numero1+numero2;
        if (!Number .isNaN(resultado)) {
            var resultado2=resultado + numero2;
            alert(` incremento 1 es: ${resultado}`)
        }
         if (!Number .isNaN(resultado2)) {
            resultado2 + numero2;
            var resultado3= resultado2 + numero2;
            alert(` incremento 2 es: ${resultado2}`)
        }if (!Number .isNaN(resultado3)) {
            resultado3 + numero2;
            var resultado4= resultado3 + numero2
            alert(` incremento 3 es: ${resultado3}`)
        }
        if (!Number .isNaN(resultado4)) {
            resultado4 + numero2;
            alert(` incremento 4 es: ${resultado4}`)
        }

    }
    console.log(resultado);