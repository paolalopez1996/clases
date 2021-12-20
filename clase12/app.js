//condicionales va a modificar el flujo de nuestro programa

/*
✨"if"
palabra reservada _if_ parentesis para evaluar la condicion y las llaves que agrupan las 
ejecuciones if(condicion){ejecuciones}
-------------------------------------------------------------------------------------
✨if-else:
if(condicion){ejeciciones}; palabra reservada _else_
y llaves que agrupen las ejecuciones
}else {otras ejecuciones}
----------------------------------------------------------------------------------------
✨CONDICIONES DE IGUALDAD:
> mayor qué
>= mayor o igual qué
< menor qué
<= menor o igual qué
!= diferente de
!== estrictamente diferente
== igual a
=== estrictamente igual

✨OPERADORES LOGICOS: Nos permite
&&: evaluar que todas las condiciones sean vrdaderas
|| : evalua que alguna condicion sea verdadera


*/
/*

✨ EJEMPLO DE IF:

const mayorEdad = () => {
    //verificar si el usuario tiene 18 años o mas
    console.log('inicia la funcion');
    // const edad = prompt('ingresa tu edad')
    if (edad >= 18) {
      alert("bienvenido a nuestra web");

    }else {
       alert("Aun no tienes la mayoria de edad");s
    }
   
}
console.log('termina la funcion')
mayorEdad();
*/

///////////////////////////////////

//✨ EJEMPLO DE IF ELSE ANIDADO
/*
const diferenciaEdades = () => {
    //verificar la edad del usuario y enviar un mensaje segun sea el caso
    const edadUsuario = prompt('Por favor, ingresa tu edad')
    console.log(edadUsuario); // 18

    if( edadUsuario < 18){
        alert("aun eres pequeño");
        
    }else if (edadUsuario == 18){

    alert('bienvenido a la mayoria de edad');
}else{
    alert('tu ya eres mayor');
}
};
diferenciaEdades();
*/
// ✨EJEMPLO DE && Y ||
/*
const licenciaConducir = () =>{
    const edad = prompt('indica tu edad')
    if (edad > 15 && edad < 18){
        alert('puede tener permiso de conducir');
    }else if (edad == 18 || edad > 18){
        alert('tramita tu licencia de conducir');
    } else {
        alert("Aun eres joven para conducir")
    }
}
licenciaConducir();
*/
//-----------------------------------------
/*
✨BLOQUES:
es el codigo que nos van a permitir repetir una misma accion una cantidad
definida de veces


WHILE: palabra reservada _while_ parentesis que evaluan que
la condicion sea verdadera, llaves que  agrupan las tareas  a ejecutar 
while(condicion){sentencias}

IMPORTANTE: que en algun momento la condicion se vuelva falsa, 
para que no ejecute las sentencias de forma infinita

*/
const imprimirNumeros = () =>{
    //imprimir en la consola de forma ciclica


let limite = 0;
while(limite < 10){

    if(limite > 8){
        console.log('el numero ya es 9 y corta la ejecucion')
        break; //ESTA PARTE SE USA EN CASO QUE SE QUIERA CORTAR UN BUCLE
    }
console.log('esta es la vuelta',limite);
limite++;
}
};
imprimirNumeros();
