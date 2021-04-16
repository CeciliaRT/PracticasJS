// Condicionantes

var txt;
var r = "Presiona el boton"

if (r == "Presiona el boton!"){
    txt = "test pass";
} else {
    txt = "Test fail";
}

console.log(txt)

//Otro ejercicio

var num2 = 42 
if (num2 ==42){ 
    console.log('El numero correcto es: ', num2)
} 
console.log(3*4)

//Otro Ejemplo 

var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar){
    console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo > bar){
    console.log("foo is smaller than bar OR moo is larger than bar.");
}

//Otro ejemplo

var boleano = false;

if( !boleano)
    console.log("Test fail")
 else 
    console.log("Test pass")
