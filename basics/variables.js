//versiones anteriores a eso era var
var miVariable;

// de eso en adelante ahora es con const y let

//const declara cocnstantes, no permite reasignacion
//Al crearla debe inicializarse 
const PI=3.14;
//PI=3.29; no permite la reasignacion

// let declara variables, permite la reasignacion
// se puede declarar y luego inicializar 
// JS detecta automaticamente el tipo de dato
let firstname;
console.log(firstname);
firstname= 'Peter Parker';
console.log(firstname);
console.log(typeof(firstname));

firstname=18;
console.log(firstname);
console.log(typeof(firstname));

