// 02 - keys
// Partiendo de un objeto guardado en la variable producto
// Mostrar en la consola el nombre de todas las propiedades que tiene el producto
// Utilizar el método keys
const producto = {
  id: 'ADA-020',
   title: 'Gubergren sed est amet voluptua',
   price: 123.75,
   picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
  condition: 'nuevo',
  free_shipping: true,
  location: 'Capital Federal'
};

const todasLasPropiedades = Object.keys(producto);
console.log(todasLasPropiedades);
// resultado esperado
// [ 'id',
//   'title',
//   'price',
//   'picture',
//   'condition',
//   'free_shipping',
//   'location' ]


for (let i = 0; i< todasLasPropiedades.length; i++) {
  let propiedadPersona = todasLasPropiedades[i];
  

  console.log(`producto['${propiedadPersona}'] -> ${producto[propiedadPersona]} ` )
  
}