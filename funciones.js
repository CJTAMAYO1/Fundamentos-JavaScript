// Funciones con javascript

/*
funcion nombre(params){
    body function
}
*/
/**
const nombre = function(parasm){
    body function
}
 */

//funcion sin parametros sin retorno

function saluda(){
    console.log('helloooo');
}
saluda();

// funcion con patrametros sin retorno
const saludaA= function (name){
    console.log (`Hola ${ name }` );
}
saludaA('Batman');

//funcion con parametros y retorno
const duplica = function (num){
    return num*2;
}
const doble = duplica(26);
console.log (doble);

//arrow function, funciones de flecha ES6
/* 
(params) =>{
    body function
}
*/

const getFullName = (firstname,lastname) => {
    return firstname + '' + lastname;
}

const nombre=getFullName('peter', 'Parker')
console.log (nombre);

//podemos omitir () con un unico parametro
const minusculas = (word) => {
    return word.toLowerCase();
}
const mayusculas = word => {
    return word.toUpperCase();
}
console.log(mayusculas ('hello'));

//podemos omitir llaves y return si solo hay una linea 
const cuadrado =num => num*num;
console.log (cuadrado (25));