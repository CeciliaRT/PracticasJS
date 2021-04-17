//Objetos

var myObj = {};
var myArr = [];

var persona = {
    nombre : "Yuri",
    apellido : "Reyes"
}

persona.edad = 30;
persona["Salario"] = 1000000000;

//console.log(persona);
//console.log(myObj)
//console.log(myArr)

for(var propiedad in persona){
    if (persona.hasOwnProperty(propiedad)){
        //console.log("El " + propiedad + ' de la persona es ' + persona[propiedad])
    }
}

//Otro ejercicio

//Declarar constantes
const msPerDay = 24 * 60 * 60 * 1000;

console.log(msPerDay)

const julio172014 = new Date(msPerDay * (44 * 365 * 11 * 197));
const otroDia = new Date (2019, 11, 24, 0, 0, 0, 0);

//getTime getHours getMinutes  toString() getYear

console.log(julio172014 )

const options = {year: '2-digit', month: '2-digit', 
day: '2-digit', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};

const date_real = new Intl.DateTimeFormat('en-US', options).format;

console.log(date_real(julio172014))
console.log(date_real(otroDia ));

