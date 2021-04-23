
//Contar el numero de vocales 
//input: yurishi output: 3

function vocales(cadena){
    var n = cadena.length;

    var countVocal=0;
    var countConst=0;

    for(var i=0; i<n ; i++){
        var x = cadena.charAt(i).toLowerCase();

        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
};

//console.log('Vocales y Consonantes ' + vocales('tyes'))
//console.log('Vocales y Consonantes ' + vocales('yurishi'))
//console.log('Vocales y Consonantes ' + vocales('casa'))

function letter_indexof(cadena) {
    var n = cadena.length;
    var vocales = ["a","e","i","o","u"]; 

    var countVocal=0;
    var countConst=0;

    for(var i=0; i<n ; i++){
        
        if (vocales.indexOf(cadena.charAt(i).toLowerCase()) >= 0)
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
}

//console.log('Vocales y Consonantes ' + letter_indexof('tyes'))
//console.log('Vocales y Consonantes ' + letter_indexof('yurishi'))
//console.log('Vocales y Consonantes ' + letter_indexof('casa'))

//arreglo de numeros, dividirlos de 3 en 3 y imprimir el numero menor
//input: [765345324] output: 532
//paso 1: [ 765 345 324 ]
//paso mostrar el numero menor de cada tercio:
//input: [87654]  [876 54] output: 64

function array3(items){
    const elementos = items.length

    console.log('elem:', elementos)

    if (elementos >=3){
        console.log('aquihace algo')
        let alumnos =["Carlos","Clara","Cristina","Fernando","Ivan","Lara","Mercedes","Rafael","Roberto","Sandra","Tania","Raulito","Milagros"];

        let mitad = Math.floor(alumnos.length / 2);

        let inicio = alumnos.slice(0, mitad);
        let final = alumnos.slice(mitad); // si no se indica el índice final, se usa la longitud del array como referencia

        console.log('Primera parte:', inicio.toString())
        console.log('Segunda parte', final.toString())
        console.log('Array original', alumnos.toString());
        
        items2 = 0;
        
    }
    else {
        items2 = Math.max(...items)
    }

   
  
    return items2
}

var array = [8,7,5,1]
var array2 = [8,7]
var array4 = [7,5,1]
console.log(array3(array))
console.log(array3(array2))
console.log(array3(array4))

//Descubrir si una palabra es palindromo
//input: anna   output: Es un palindromo
//input: casa   output: No es un palindromo
//input: arribalabirra   output: Es un palindromo