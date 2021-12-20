const cambioApariencia = () => {
    const parrafoPrincipal = document.getElementById('principal');
    parrafoPrincipal.innerText = 'cambia cuando el cursor pasa por el otro parrafo'
    parrafoPrincipal.classList.add('principal')
}
const init = () => {
    //eventos son actos o sucesos que se desencadenan
    //luego de uan accion


//modificar el texto de algun elemento (innerText)
const parrafoSimple = document.getElementById('parrafoSimple');
console.log('valor antes del cambio;', parrafoSimple.innerText);
parrafoSimple.innerText =  'texto modificado desde JS'




const button = document.querySelector('button');
// a continuacion agregamos un evento a un elemento:
button.addEventListener('click', () => {
    const inputNombre = document.querySelector('input').value;
    const h3 = document.getElementById('nombreUser');
    h3.innerText = `Hola ${inputNombre} te doy la bienvenida`;
    h3.classList.add('background')


});

parrafoSimple.addEventListener('mouseover', cambioApariencia);
// addeventlistener requiere 2 argumentos
//evento qeu a va detonar las acciones
//funcion que ejecutara dicahs acciones
//elemento.addEventListener('_evento_', () => {sentenciia a realizar})
};
document.onload = init();


//otras maneras de agregar onload para introducitr eventos:
//1)document.onload = init();


//2)document.onload = () => {
  //  alert ('holaaaa')
//})

//3)document.addEventListener('load' init ())


//4) document.addEventListener('load', () => {
// alert('hola amigos desde addeventlistener')
// });