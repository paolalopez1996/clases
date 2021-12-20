// el metodo ONLOAD se va a ejecutar cuando el documento se
// ha cargado correcta y completamente

// para interactuar con el DOM (document) tenemos distintos metodos para obtener los elementos


const init = () => {
    /* para interactuar con el DOM (document) tenemos distintos
     metodos para obtener los elementos */


//a traves de ID
   const parrafo = document.getElementById('parrafoSimple');
   console.log(parrafoSimple);

// a traves de la etiqueta directamente 
   const li = document.getElementsByTagName('li');
   console.log(li);


// a traves de la clase de css
const claseSeleccion =  document.getElementsByClassName('section')
console.log(claseSeleccion);


// a traves de cualquier selector de css (solo regresa 1 elemento)
const h1 = document.querySelector('#parrafoSimple')



// a traves de cualquier selector de CSS (devuelve todos)
const todosLosLi  = document.querySelectorAll('li')
//-------------------------------------

// una vez quqe tenemos los elementos podemos ver sus atributos

// atributes: una lista de todos lso atributos 
const atributosParrafo =parrafo.attributes;
console.log(atributosParrafo);

// un solo atributo:
const atributoClaseParrafo = parrafo.getAttribute('class')
console.log(atributoClaseParrafo)
//otra forma de hacerlo seria:
const atributoIdParrafo = parrafo.id;
console.log(atributoIdParrafo );

//--------------------------------------------------------


// CLASS LIST (nos permite trabajar con las clases de cada elemento)
// ClassList (Nos permite trabajar con las clases de cada elemento)
const parrafoPrincipal = document.getElementById('principal');

// agregamos la clase ocultar
parrafoPrincipal.classList.add('ocultar');

// como tenía la clase ocultar con toggle lo sacamos
parrafoPrincipal.classList.toggle('ocultar');
// como ya no la tiene, se la agrega nuevamente
parrafoPrincipal.classList.toggle('ocultar');

// sacamos la clase negrita
parrafoPrincipal.classList.remove('negrita');

// Retorna rojo que es la primer clase que tiene este elemento
parrafoPrincipal.item(0);

// Retorna true ya que el elemento tiene la clase rojo
parrafoPrincipal.contains('rojo');

// cambiamos la clase rojo por verde
parrafoPrincipal.replace('rojo', 'verde');


}
document.onload = init();


