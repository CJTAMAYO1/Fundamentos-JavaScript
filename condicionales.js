//condicionales Javascript
//if(exp) {Body}
const age=18;
if (age=>18){
    console.log('Es Mayor');
} 
//if(exp) {Body} else {body}

if (age=>18){
    console.log('Es Mayor');
} else {
    console.log('Es Menor')
}
//if ternario (exp)? true: false;
(age>=18)? console.log('Es Mayor'): console.log ('Es Menor');
(age>=18)?
    console.log ('Es Mayor'):
    console.log ('Es Menor');
//if (exp) {} else if (exp) {} else {}
const ppt=Math.ceil(Math.random ()*3);
if (ppt==1){
    console.log('Cayo piedra')
 }else if (ppt==2){
    colsole.log('Cayo Papel')
 } else {
    console.log ('Cayo tijeras')
 }
//switch / case
const day=Math.ceil(Math.random() *7)
switch(day){
    case 1: 
    console.log ('Es domingo')
    break;
    case 2: 
    console.log ('Es lunes')
    break;
    case 3: 
    console.log ('Es martes')
    break;
    case 4: 
    console.log ('Es miercoles')
    break;
    case 5: 
    console.log ('Es jueves')
    break;
    case 6: 
    console.log ('Es viernes')
    break;
    case 7: 
    console.log ('Es sabado')
}

//    truthy and falsy
//Distintos tipos de datos evaluados como boolean
// 0->false
// Not 0 -> true
// '' -> false
// 'algo' -> true 
let apples =0;
if (apples>0){
    console.log ('Tenemos ${ apples } manzanas');
} else {
    console.log('No tenemos manzanas');
}
apples=10;
if (apples){
    console.log('Tenemos ${ apples } manzanas');
} else {
    console.log('No hay manzanas')
}


let userLoggeado='';
let usuarioActual;
userLoggeado?
    usuarioActual=userLoggeado:
    usuarioActual='Invitado';

console.log(usuarioActual);    

userLoggeado='Frank'

usuarioActual = userLoggeado || 'invitado';
console.log(usuarioActual);

