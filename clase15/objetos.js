// object.keys: siempre retorna un arreglo.

const persona = {
    nombre: 'Ada',
    apellido: 'Lovelace',
    edad: 30,
    saludar: () => { console.log('Hola, me da gusto verte')},
    esMadre: false
  };
  
  const propiedades = Object.keys(persona);
  
  for(let i = 0; i < propiedades.length; i++) {
    let propiedad = propiedades[i];
  
    console.log(`La propiedad ${propiedad} tiene como valor ${persona[propiedad]}`)
  }
  