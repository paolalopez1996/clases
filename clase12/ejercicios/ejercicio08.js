// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que 
// tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y
//  pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet 
//  de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene
//   multas impagas y pagó todos los impuestos





function puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos){
    
    if (pasoTests == false || tieneMultasImpagas == true  || pagoImpuestos == false ){
        console.log(  false + 'lo siento, no puedes renovar la licencia')
    

} else if ( pasoTests == true && tieneMultasImpagas == false && pagoImpuestos == true){
    console.log( true  +  'puede renovar licencia')

}
};


puedeRenovarCarnet(true, true, true)    // false
 puedeRenovarCarnet(true, true, false)   // false
 puedeRenovarCarnet(true, false, true)   // true
 puedeRenovarCarnet(true, false, false)  // false
 puedeRenovarCarnet(false, true, true)   // false
 puedeRenovarCarnet(false, true, false)  // false
 puedeRenovarCarnet(false, false, true)  // false
 puedeRenovarCarnet(false, false, false) // false