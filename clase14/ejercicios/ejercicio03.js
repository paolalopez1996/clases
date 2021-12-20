// invertirCaso(string)
// Crear una función invertirCaso que tome como 
// argumento un string string y devuelva un string donde cada l
// etra tiene el caso invertido, es decir, cada letra está 
// mayúscula si estaba en minúscula, y viceversa.

function invertirCaso(string) {
    let resultado = '';

    for ( let i = 0; i < string.length; ++i) {
        if ( i % 2 == 0){
            resultado += string[i].toUpperCase();
        } else {
            resultado += string[i].toLowerCase();
        }
    }
return resultado;
}
console.log(invertirCaso('Ada Lovelace')); // 'aDA lOVELACE'
console.log(invertirCaso('feliz cumple'));// 'FELIZ CUMPLE'
console.log(invertirCaso('jAvAsCrIpT')); // 'JaVaScRiPt'









