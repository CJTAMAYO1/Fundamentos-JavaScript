const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random()*8);
    let resp;
    switch (opcion){
        case 1:
            resp='Todo saldra bien';
            break;
        case 2:
            resp='Todo saldra mal';
            break;
        case 3:
            resp='Todo saldra mas o menos bien';
            break;
        case 4:
            resp='Todo saldra mas o menos mal';
            break;
        case 5:
            resp='al puro trillon';
            break;
        case 6:
            resp='bitches look me an extrange but you know i dont care';
            break;
        case 7:
            resp='si, aja';
            break;
        case 8:
            resp='primero dios';
            break;
        default:
        resp='No lo se';
    }
    respuesta.innerHTML=resp
}