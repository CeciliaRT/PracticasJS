// Funciones flecha 
//Imprimir Hello World!
function helloW(nombre){
    return "Hola " + nombre + "!";
}

console.log(helloW("Yuri"));

const helloFlechaW = (name) => { 
    return "Hola " + name + "!"; 
}

console.log(helloFlechaW("Saida"));

//Función suma

var suma = function(x,y) {
    return x + y;
};
const suma2a = (x,y) => { return x + y; };
const suma3a = (x,y) => x + y;

console.log(suma(2,3));
console.log(suma2a(2,3));
console.log(suma3a(2,3));

//Funcion Cuadrado

var cuadrado = function(x) {
    return x * x;
};
const cuadrado2a = (x) => { return x * x; };
const cuadrado3a = (x) => x * x;

console.log(cuadrado(2));
console.log(cuadrado2a(4));
console.log(cuadrado3a(5));

//Funcion para manejar/imprimir los caracteres de una pabra (array de palabras)

var palabras = [
    'arbol', 'pabritas','Juan','Trabucles','Armandos','Cecilia','Gabriela'
];

var contarLetras = palabras.map(s => s.length)
console.log(contarLetras);

//Tradicional
var contarLetales_trad = palabras.map( function(s) {return s.length});


// Funcion mutiplicar numeros de un array

var arayN = [1 , 2, 3, 4, 5]

const multiplicarConFlecha = host => host * 2;
let multiplicarNumeress = arrayN.map(multiplicarConFlecha);

console.log(multiplicarNumeress);
/*


function multiplicarNumeros(numero){
    return numero * 2;
}
console.log(multiplicarNumeros(3));

let losnumeros = numeros.map(multiplicarNumeros)

*/