//Ejercisios para entrevistas
/*
input: ty 
output: tttyyy
input: 5567
output: 555555666777
*/

function threecompany(cadena){
    var n = cadena.length;
    var output = '';

    for(var i=0; i<n ; i++){
        var letra = cadena.charAt(i);
        output = output + letra + letra + letra
    }
    return output;
};

console.log(threecompany('ty'))
console.log(threecompany('5567'))
console.log(threecompany('casa'))


//Contar el numero de vocales 
//input: yurishi output: 3

//arreglo de numeros, dividirlos de 3 en 3 y imprimir el numero menor
//input: [765345324] output: 532
//paso 1: [ 765 345 324 ]
//paso mostrar el numero menor de cada tercio:
//input: [87654]  [876 54] output: 64

//Descubrir si una palabra es palindromo
//input: anna   output: Es un palindromo
//input: casa   output: No es un palindromo
//input: arribalabirra   output: Es un palindromo


