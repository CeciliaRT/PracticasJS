//Objetos & funciones

function Car(marca,modelo,color,anio){
    this.marca =marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

//console.log(Car)

var Seat = new Car('Seat','Leon','Blanco','2021');
var Mazda = new Car('Mazda','3','Negro','2019');
var Meche = new Car('Mercedes','Clase E','Negro','2021')
var Ferr = new Car('Ferrari','F40','Rojo','1984')

//console.log(Seat,Mazda,Meche,Ferr)

function cliente(nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad =  edad;
    this.genero = genero;
    this.tarjeta = tarjeta;  //Visa o Mastercard
    this.status = status;   //Activo o Inactivo
}

var maria = new cliente ('Maria',20,'Mujer','Visa','Activo');
let fernado = new cliente ('Fernando',30,'Hombre','Mastercard','Inactivo')

function registro(marca,modelo,anio,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;
}

var reg_56 = new registro('Seat','Cupra',2020,maria)

console.log('Registro: ', reg_56)

//Tarea 3: ¿Será acaso que pueden crear una funcion que pueda crear objetos usando dos objetos?
//Tarea 4: Crear objetos Casa, objetos personas