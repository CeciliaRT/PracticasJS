//objetos

var persona = {
    nombre: ['Bob','Smith'],
    edad: 24,
    genero: 'masculino',
    intereses: ['música','esquí','videogames'],
    bio: function(){
        console.log(this.nombre[0]+ ' ' + this.nombre[1]+ ' tiene '+ this.edad + ' años. Le gutsa ' + this.intereses);
    },
    saludo: function() {
        console.log('Hola, soy ', this.nombre[0]);
    }
};

persona.saludo();
persona.bio();

console.log('El interes principal es: ' + persona.intereses[0]);

persona.job = 'IT';

persona.sayGoodbye = function(){
    console.log('hello/good bye');
}

persona.sayGoodbye();
console.log(persona);