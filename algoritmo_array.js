// Arreglo invertido

var myArray = ["A", "B", "C"];
var newArray= [];
for (var i = 0; i < myArray.length; i++){
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
    newArray.unshift(myArray[i]);
}

console.log(newArray); 

for (var i = 0; i < newArray.length; i++){
    console.log("NewArray " + i + " is " + newArray[i]);
    
}
